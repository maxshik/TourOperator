import { Carousel } from "antd";
import React, {Component} from "react";
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import '../style/carouselOfAuthorsTours.css';
import CardOfAuthorTour from "./CardOfAuthorTour";


export default class CarouselOfAuthorsTours extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let Tours = [
      {
        title: "Турция",
        text: "Еженедельные вылеты из Минска и Москвы",
        imgSrc: "img/author's_tours/author_Turkey.jpg",
        href: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F"
      },
      {
        title: "Польша",
        text: "Познайте красоту Варшавы и Кракова",
        imgSrc: "img/author's_tours/author_Poland.jpg",
        href: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D1%88%D0%B0"
      },
      {
        title: "Норвегия",
        text: "Откройте мир фьордов и северного сияния",
        imgSrc: "img/author's_tours/author_Norway.jpg",
        href: ""
      },
      {
        title: "Эстония",
        text: "Исследуйте уникальную природу и культуру",
        imgSrc: "img/author's_tours/author_Estonia.jpg"
      },
      {
        title: "Шотландия",
        text: "Посетите замки легендарной страны",
        imgSrc: "img/author's_tours/author_Scotland.jpg"
      }
    ]

    return (
      <div className="carousel-container">
        <LeftCircleOutlined className="carousel-arrow-left" onClick={this.previous}/>
        <Carousel ref={node => (this.carousel = node)} {...props} autoplay>
          {Tours.map((tour) => (
            <CardOfAuthorTour 
              title={tour.title} 
              text={tour.text} 
              imgSrc={tour.imgSrc}
              href={tour.href}
            />
          ))}
        </Carousel>
        <RightCircleOutlined className="carousel-arrow-right" onClick={this.next} />
      </div>
    );
  }
}