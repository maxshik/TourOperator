import React, { useEffect } from 'react';
import '../../style/promotionalTours.css'
const CardOfPromotionalTour = ({ title, text, extraText, imgSrc }) => {
  useEffect(() => {
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
         change.target.classList.add('element-show');
        }
      });
    }
    
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    elements.forEach(elm => {
      observer.observe(elm);
    });

    // Очистка при размонтировании
    return () => {
      elements.forEach(elm => {
        observer.unobserve(elm);
      });
    };
  }, []); // Пустой массив означает, что эффект запускается один раз при монтировании и очищается при размонтировании

  return (
    <div className="element-animation card-hover">
      <div className="card-hover__content">
        <h3 className="card-hover__title">{title}</h3>
        <p className="card-hover__text">{text}</p>
        <a href="#" className="card-hover__link">
          <span>Подробнее</span>
          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>        
        </a>
      </div>
      <div className="card-hover__extra">
        <h4>{extraText}</h4>
      </div>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default CardOfPromotionalTour;
