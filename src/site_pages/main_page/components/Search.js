import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StarFilled, EnvironmentTwoTone, DollarTwoTone } from "@ant-design/icons";
import { Cascader, Button, DatePicker } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import '../style/search.css';
import '../../tours/style/tours.css'

const { RangePicker } = DatePicker;

const Search = () => {
  const options_departure = [
    {
      value: "Беларусь",
      label: "Беларусь",
      children: [
        {
          value: "Минск",
          label: "Минск",
        },
        {
          value: "Гродно",
          label: "Гродно",
        },
        {
          value: "Гомель",
          label: "Гомель",
        },
        {
          value: "Брест",
          label: "Брест",
          disabled: true,
        },
      ],
    },
    {
      value: "Россия",
      label: "Россия",
      children: [
        {
          value: "Москва",
          label: "Москва",
        },
        {
          value: "Санкт-Петербург",
          label: "Санкт-Петербург",
        },
        {
          value: "Сочи",
          label: "Сочи",
          disabled: true,
        },
      ],
    },
  ];

  const options_arrival = [
    {
      value: "Турция",
      label: "Турция",
      children: [
        { value: "Анталья", label: "Анталья" },
        { value: "Стамбул", label: "Стамбул" },
        { value: "Анкара", label: "Анкара" },
        { value: "Измир", label: "Измир" },
      ],
    },
    {
      value: "Египет",
      label: "Египет",
      children: [
        { value: "Шарм-эль-Шейх", label: "Шарм-эль-Шейх" },
        { value: "Каир", label: "Каир" },
      ],
    },
    {
      value: "Япония",
      label: "Япония",
      children: [
        { value: "Токио", label: "Токио" },
        { value: "Осака", label: "Осака" },
      ],
    },
    {
      value: "ОАЭ",
      label: "ОАЭ",
      children: [
        { value: "Дубай", label: "Дубай" },
        { value: "Абу-Даби", label: "Абу-Даби" },
      ],
    },
  ];

  const [tours, setTours] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  if (isVisible) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'auto';
  }
  
  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      handleClose();
    }
  };

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  useEffect(() => {
    fetch("/tours")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.recordsets[0])) {
          setTours(data.recordsets[0]);
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }, []);

  const handleTourClick = (tourId) => {
    console.log(tourId);
    navigate(`/tour/${tourId}`);
  };

  return (
    <>
      <img src="img/background.jpg" id="background"/>
      <div id="search-area">
        <div id='selection_of_the_tour'>
          <h2>Подбор тура</h2>
        </div>
        <div>
          <RangePicker
            onChange={(range) => {
              const [start, end] = range;
              dispatch({
                type: "change_date",
                payload: [start, end],
              });
            }}
            placeholder={["Начало", "Конец"]}
            value={searchState.date}
          />

          <Cascader
            options={options_departure}
            placeholder="Город отправления"
            showSearch={{
              filter,
            }}
            onChange={(departure_city) => {
              dispatch({
                type: "change_city_of_departure",
                payload: departure_city,
              });
            }}
            value={searchState.cityOfDeparture}
          />
          <Cascader
            options={options_arrival}
            placeholder="Город прибытия"
            showSearch={{
              filter,
            }}
            onChange={(arrival_city) => {
              dispatch({
                type: "change_city_of_arrival",
                payload: arrival_city,
              });
            }}
            value={searchState.cityOfArrival}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              if (
                !searchState.date ||
                !searchState.cityOfDeparture ||
                !searchState.cityOfArrival
              ) {
                return;
              } else {
                fetch("/search", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(searchState),
                })
                  .then((response) => {
                    console.log(response);
                    return response.json();
                  })
                  .then((data) => {
                    if (data.recordset.length > 0) {
                      setTours(data.recordset);
                      console.log("Data from server:", data);
                    } else {
                      setTours([]);
                    }
                  })

                  .catch((error) => {
                    console.error("Ошибка:", error);
                  });
              }
              setIsVisible(true);
            }}
          >
            Поиск
          </Button>
        </div>
        {isVisible && (
          <div
            id="modal"
            className={`modal ${isVisible ? "visible" : ""}`}
            onClick={handleOutsideClick}
          >
            <div className="tourSearch">
              <CloseCircleOutlined
                className="close-icon"
                onClick={handleClose}
              />
              <h1>Найденные туры</h1>
              <div className="tours" style={{ marginRight: "5vw" }}>
                {tours.map((tour, index) => (
                  <div
                    key={index}
                    className="tour"
                    onClick={() => {handleClose(); handleTourClick(tour.id)}}
                  >
                    <img src={tour.img} />
                    <div className="content">
                      <div className="text">
                        <h2>
                          {tour.tour_name}{" "}
                          <span>
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
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
