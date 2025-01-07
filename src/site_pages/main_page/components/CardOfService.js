import '../style/cardOfService.css'
import { useEffect } from 'react';
import { Rate } from 'antd';

const CardOfService = ({ card }) => {
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
        <div className='element-animation CardService'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={card.img} />
                    <h3 className='cardName'>{card.cardName}</h3>
                    <p className='card-description'>{card.description}</p>
                </div>
                <div className='card-back'>
                    <h3>{card.cardName}</h3>
                    <Rate defaultValue={card.rate} allowHalf disabled={true}/>
                    <p id="downloads">{card.downloads} загрузок</p>
                    <button class="button-18" role="button">Скачать</button>
                    <p id="size">Размер: {card.size}мб</p>
                </div>
            </div>
        </div>
    )
}

export default CardOfService
