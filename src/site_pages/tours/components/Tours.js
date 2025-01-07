import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StarFilled,
  EnvironmentTwoTone,
  DollarTwoTone,
} from "@ant-design/icons";
import "../style/tours.css";
import "../style/filters.css";
import { Slider, InputNumber, Checkbox, Button, Drawer } from "antd";
import { Spin } from "antd";

let min_price = 0,
  max_price = 6000;

function Tours() {
  const [minPrice, setMinPrice] = useState(min_price);
  const [maxPrice, setMaxPrice] = useState(max_price);
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedMealTypes, setSelectedMealTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(60);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("/tours")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data.recordsets[0])) {
          setTours(data.recordsets[0]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setIsLoading(false);
      });
  }, []);

  const countries = ["Dubai,AE", "Istanbul,TR", "Cairo,EG", "Tokyo,JP", "Paris, FR"];

  useEffect(() => {
    countries.forEach((country) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=694d5c2a3ce744cd7309ae838801b04b`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка при получении данных о погоде");
          }
          return response.json();
        })
        .then((data) =>
          setWeatherData((prevData) => ({ ...prevData, [country]: data }))
        )
        .catch((error) => setError(error.message));
    });
  }, []);

  if (error) {
    return console.log("Произошла ошибка: ", { error });
  }

  const handleTourClick = (tourId) => {
    console.log(tourId);
    navigate(`/tour/${tourId}`);
  };

  if (isLoading) {
    return (
      <div>
        <Spin tip="Loading" size="large" fullscreen>
          <div className="contentt" />
        </Spin>
      </div>
    );
  }

  const countryCodes = {
    ОАЭ: "Dubai,AE",
    Турция: "Istanbul,TR",
    Египет: "Cairo,EG",
    Япония: "Tokyo,JP",
    Франция: "Paris, FR"
  };
  const filteredTours = tours.filter(
    (tour) =>
      tour.price >= minPrice &&
      tour.price <= maxPrice &&
      (selectedCountries.length === 0 ||
        selectedCountries.includes(tour.country)) &&
      (selectedRoomTypes.length === 0 ||
        selectedRoomTypes.includes(tour.number_type)) &&
      (selectedMealTypes.length === 0 ||
        selectedMealTypes.includes(tour.feeding)) &&
      (!weatherData[countryCodes[tour.country]] ||
        (minTemp <= (weatherData[countryCodes[tour.country]].main.temp - 273.15) &&
          (maxTemp === 60 || maxTemp >= (weatherData[countryCodes[tour.country]].main.temp - 273.15))))
  );
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const marks = {
    0: "0°C",
    30: {
      style: {
        color: "orange",
      },
      label: <strong>30°C</strong>,
    },
    60: {
      style: {
        color: "#f50",
      },
      label: <strong>60°C</strong>,
    },
  };
  return (
    <>
      <Button className="button-filter" onClick={showDrawer}>
        Фильтрация
      </Button>
      <div className="filters_and_tours">
        <Drawer
          title="Фильтрация"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div className="filters">
            <div className="choice_price">
              <InputNumber
                min={min_price}
                max={max_price}
                value={minPrice}
                controls={false}
                onChange={(value) => {
                  setMinPrice(value);
                }}
              />
              <h4>Цена</h4>
              <InputNumber
                min={min_price}
                max={max_price}
                value={maxPrice}
                controls={false}
                onChange={(value) => {
                  setMaxPrice(value);
                }}
              />
            </div>
            <Slider
              range={{
                draggableTrack: true,
              }}
              min={min_price}
              max={max_price}
              value={[minPrice, maxPrice]}
              onChange={(value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
            />
            <h4>Выбери желаемую погоду</h4>
            <Slider
              range
              marks={marks}
              defaultValue={[0, 60]}
              onChange={(value) => {
                setMinTemp(value[0]);
                setMaxTemp(value[1]);
              }}
            />
            <h4 style={{ textAlign: "center", marginBottom: "2vh" }}>
              Выбери страну(-ы)
            </h4>
            <Checkbox.Group
              style={{ justifyContent: "center" }}
              onChange={setSelectedCountries}
            >
              <Checkbox value="Турция">Турция</Checkbox>
              <Checkbox value="Египет">Египет</Checkbox>
              <Checkbox value="Франция">Франция</Checkbox>
              <Checkbox value="Япония">Япония</Checkbox>
              <Checkbox value="ОАЭ">ОАЭ</Checkbox>
            </Checkbox.Group>

            <h4
              style={{
                textAlign: "center",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Тип номеров
            </h4>
            <Checkbox.Group
              style={{ justifyContent: "center" }}
              onChange={setSelectedRoomTypes}
            >
              <Checkbox value="Studio room">Studio room</Checkbox>
              <Checkbox value="Deluxe room">Deluxe room</Checkbox>
              <Checkbox value="Standard room">Standard room</Checkbox>
            </Checkbox.Group>
            <h4
              style={{
                textAlign: "center",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Тип питания
            </h4>
            <Checkbox.Group
              style={{ justifyContent: "center" }}
              onChange={setSelectedMealTypes}
            >
              <Checkbox value="BB">Bed & Breakfast</Checkbox>
              <Checkbox value="HB">Half Board</Checkbox>
              <Checkbox value="FB">Full Board</Checkbox>
              <Checkbox value="AI">All Inclusive</Checkbox>
            </Checkbox.Group>
          </div>
        </Drawer>
        <div className="tours">
          {filteredTours.map((tour, index) => (
            <div style={{ marginBottom: "5vh" }}>
              <div
                key={index}
                className="tour"
                onClick={() => handleTourClick(tour.id)}
              >
                <img src={tour.img} />
                <div className="content">
                  <div className="text">
                    <h2>
                      {tour.tour_name}{" "}
                      <span
                        style={{ fontSize: "18px", verticalAlign: "super" }}
                      >
                        {tour.stars}
                        <StarFilled style={{ color: "#ffbe00" }} />
                      </span>
                    </h2>
                    <p className="short_description">
                      {tour.short_description}
                    </p>
                    <p className="location">
                      <EnvironmentTwoTone twoToneColor="#2b3e79" />{" "}
                      {tour.country}, {tour.city}
                    </p>
                    <DollarTwoTone twoToneColor="#2b3e79" /> {tour.price}{" "}
                    долларов США
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tours;
