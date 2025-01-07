import CardOfPromotionalTour from './CardOfPromotionalTour'
import '../../style/promotionalTours.css'

let PromTours = [
  {
    title: "Турция",
    text: "Турция — магическая страна, где сливаются воедино величественные красивые пейзажи, очень богатая история и радушное гостеприимство ее народа",
    extraText: "До конца 2023 скидка 20%",
    imgSrc: "img/promo_tours/promo_Turkey.jpg",
  },
  {
    title: "Италия",
    text: "Италия — удивительная страна, где можно насладиться восхитительной кухней, изумительными произведениями искусства и неповторимой атмосферой романтики.",
    extraText: "До конца 2023 скидка 15%",
    imgSrc: "img/promo_tours/promo_Italy.jpg",
  },
  {
    title: "Япония",
    text: "Япония — уникальная страна, где гармонично сочетаются древнейшие традиции, современные технологии, умные люди и завораживающая природа.",
    extraText: "До конца 2023 скидка 10%",
    imgSrc: "img/promo_tours/promo_Japan.jpg",
  },
];

const PromotionalTours = () => {
  return (
    <div className="promotional-tours">
      {PromTours.map((tour) => (
        <CardOfPromotionalTour
          title={tour.title}
          text={tour.text}
          extraText={tour.extraText}
          imgSrc={tour.imgSrc}
        />
      ))}
    </div>
  );
};

export default PromotionalTours;
