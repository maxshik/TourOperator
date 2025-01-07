import { DribbbleOutlined, ClearOutlined, CoffeeOutlined, SkinOutlined, ShoppingOutlined, GiftOutlined, WifiOutlined } from '@ant-design/icons';
import '../../style/descriptionOfPromotionalTours.css';

const Description = () => {
    return (
        <div className='description'>
            <div className="element-description-tag">
                <DribbbleOutlined className="element-description" />
                <div>Занятие спортом</div>
            </div>
            <div className="element-description-tag">
                <ClearOutlined className="element-description" />
                <div>Ежедневная уборка</div>
            </div>
            <div className="element-description-tag">
                <CoffeeOutlined className="element-description" />
                <div>Кофе в постель</div>
            </div>
            <div className="element-description-tag">
                <SkinOutlined className="element-description" />
                <div>Мерч оператора</div>
            </div>
            <div className="element-description-tag">
                <ShoppingOutlined className="element-description" />
                <div>Поездки в магазин</div>
            </div>
            <div className="element-description-tag">
                <GiftOutlined className="element-description" />
                <div>Подарки от оператора</div>
            </div>
            <div className="element-description-tag">
                <WifiOutlined className="element-description" />
                <div>Быстрый Wi-Fi</div>
            </div>
        </div>
    );
};

export default Description;