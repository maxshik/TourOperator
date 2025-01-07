import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Spin, Button, Image } from "antd";
import { CheckOutlined, StarFilled } from "@ant-design/icons";
import useFetch from "../../../hooks/useFetch";
import MakeOrder from "./MakeOrder";

function Tour() {
  const makeOrderRef = useRef();
  const { tourId } = useParams();
  const { data: tours, isLoading, error } = useFetch("/tours");

  const tour = tours ? tours[tourId - 1] : null;
  console.log(tour);

  if (isLoading) {
    return (
      <div>
        <Spin tip="Loading" size="large" fullscreen>
          <div className="contentt" />
        </Spin>
      </div>
    );
  }

  if (error) {
    return <div>Произошла ошибка: {error}</div>;
  }

  const handleClick = () => {
    makeOrderRef.current.openModal();
  };

  return (
    <div>
      <MakeOrder />
      {tour ? (
        <div>
          <h2 style={{ textAlign: "center" }}>
            {tour.tour_name}{" "}
            <span style={{ fontSize: "18px", verticalAlign: "super" }}>
              {tour.stars}
              <StarFilled style={{ color: "#ffbe00" }} />
            </span>
                <h5 style={{ textAlign: "center", fontSize: "15px" }}>(цена: {tour.price}$)</h5>
                <div style={{ textAlign: "center", fontSize: "15px", fontWeight: "100" }}>{tour.short_description}</div>
          </h2>
          <div style={{ display: "flex" }}>
            <div>
              <div>
                <h3 style={{ marginTop: "2vh" }}>Описание отеля </h3>
                Местоположение: {tour.country}, {tour.city} <br />
                {tour.description}
                <h3 style={{ marginTop: "2vh" }}>Информация о туре</h3>
                <p>Дата вылета: {tour.departure_date.substring(0, 10)}</p>
                <p>Количество ночей: {tour.countless_nights}</p>
                <p>Питание: {tour.feeding}</p>
                <p>Тип номера: {tour.number_type}</p>
              </div>
              <div>
                <h3 style={{ marginTop: "2vh" }}>Удобства и услуги</h3>
                {tour.internet ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> интернет
                  </div>
                ) : (
                  ""
                )}
                {tour.safe ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> сейф
                  </div>
                ) : (
                  ""
                )}
                {tour.hairdryer ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> фен
                  </div>
                ) : (
                  ""
                )}
                {tour.mini_kitchen ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> мини-кухня
                  </div>
                ) : (
                  ""
                )}
                {tour.shower ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> душ
                  </div>
                ) : (
                  ""
                )}
                {tour.air_conditioning ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> кондиционер
                  </div>
                ) : (
                  ""
                )}
                {tour.balcony ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> балкон в номере
                  </div>
                ) : (
                  ""
                )}
                {tour.mini_bar ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> мини-бар
                  </div>
                ) : (
                  ""
                )}
                {tour.telephone ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> стационарный
                    телефон
                  </div>
                ) : (
                  ""
                )}
                {tour.room_service ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> рум-сервис
                  </div>
                ) : (
                  ""
                )}
                {tour.medical_help ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> медицинская
                    помощь
                  </div>
                ) : (
                  ""
                )}
                {tour.restaurants ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> ресторан(-ы)
                  </div>
                ) : (
                  ""
                )}
                {tour.laundry ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> прачечная
                  </div>
                ) : (
                  ""
                )}
                {tour.swimming_pool ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> бассейн
                  </div>
                ) : (
                  ""
                )}
                {tour.chilren_pool ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> детский бассейн
                  </div>
                ) : (
                  ""
                )}
                {tour.children_playground ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> детская
                    площадка
                  </div>
                ) : (
                  ""
                )}
                {tour.sport_grounds ? (
                  <div>
                    <CheckOutlined style={{ color: "green" }} /> спортивные поля
                  </div>
                ) : (
                  ""
                )}
                <CheckOutlined style={{ color: "green" }} /> бары: {tour.bars}
              </div>
            </div>
            <div style={{ margin: "3vw" }}>
              <Image width={500} height={400} src={tour.img} />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <MakeOrder tour={tour.name} ref={makeOrderRef} />
      <Button onClick={handleClick} style={{ marginTop: "3vh" }}>
        Заказать
      </Button>
    </div>
  );
}

export default Tour;
