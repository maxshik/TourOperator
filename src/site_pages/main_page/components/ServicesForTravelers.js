import CardOfService from "./CardOfService";
import '../style/cardOfService.css'

let card = [
  {
    img: "img/services/airbnb.png",
    description:
      "Airbnb — онлайн-площадка для размещения и поиска краткосрочной аренды частного жилья по всему миру.",
    cardName: "Аренда жилья",
    rate: 4.5,
    downloads: "10 349 980",
    size: 94,
  },

  {
    img: "img/services/aviasel.png",
    description:
      "Aviasales — метапоисковик авиабилетов, существующий с 2007 года. Ежедневно данным сервисом пользуются более 15 миллионов человек.",
    cardName: "Поиск авиабилетов",
    rate: 3.5,
    downloads: "3 920 991",
    size: 58,
  },

  {
    img: "img/services/yandex.png",
    description:
      "Яндекс Карты — поисково-информационная картографическая служба Яндекса. Есть поиск по карте, информация о пробках, отслеживание городского транспорта.",
    cardName: "Онлайн карты",
    rate: 4,
    downloads: "29 429 290",
    size: 32,
  },
];

const Services = () => {
  return (
<>
      <h1 id='servises_h1' style={{marginTop: "5vh", textAlign: "center"}}>Сервисы для путешественников</h1>
      <div className="services-for-travelers">
        {card.map((item) => (
          <CardOfService card={item} />
        ))}
      </div>
</>
  );
};

export default Services;
