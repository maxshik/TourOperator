import "../style/footer.css";
import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src="/img/logo/logo2.png" />

        <p className="footer-company-name">ООО «SANTIONSHIT» © 2023</p>
      </div>

      <div className="footer-center">
          <div>
            <EnvironmentOutlined className="icons" />
            <p>г. Минск, ул. Свердлова 13а, пав. 301-1</p>
          </div>

        <div>
          <PhoneOutlined className="icons" />
          <p>+375 (25) 511-90-22</p>
        </div>

        <div>
          <MailOutlined className="icons" />
          <p>
            <a>maximshikunets@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Наш слоган</span>
          Откройте для себя мир с нашим туроператором! Мы предлагаем уникальные и незабываемые путешествия, созданные специально для вас!
        </p>

        <div className="footer-icons">
          <InstagramOutlined className="icons" />
          <TwitterOutlined className="icons" />
          <WhatsAppOutlined className="icons" />
          <FacebookOutlined className="icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
