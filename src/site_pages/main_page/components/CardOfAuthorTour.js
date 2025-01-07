import { useState } from 'react';
import '../style/carouselOfAuthorsTours.css';

const CardOfAuthorTour = ({title, text, imgSrc, href}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="carousel-slide">
      <img src={imgSrc} alt={title} className="carousel-image" />
      <p className="tourName">{title}</p>
      <p className="textUnderName">{text}</p>
      <button 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
      >
        <a 
          href={href} 
          target='_blank' 
          rel='noopener noreferrer' 
          style={{color: hover ? 'black' : 'white'}}
        >
          ПОДРОБНЕЕ
        </a>
      </button>
    </div>
  )
}

export default CardOfAuthorTour;
