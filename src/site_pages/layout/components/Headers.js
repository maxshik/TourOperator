import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import "../style/header.css";
import "../style/fonts.css";
import "../style/burgerMenu.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив означает, что эффект будет вызван только при монтировании и размонтировании

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    navigate("/");
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div id="header">
      <img src="/img/logo/logo.png" id="logo" />
      {windowWidth < 700 ? (
        <>
          <button className="open_burger">
            <MenuUnfoldOutlined
              className="btn_open_burger"
              onClick={showDrawer}
            />
          </button>{" "}
          <Drawer
            title="Навигация по сайту"
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            key="left"
            extra={<CloseOutlined onClick={onClose}>Закрыть</CloseOutlined>}
          >
            <ul className="menu__box">
              <li onClick={onClose}>
                <Link className="menu__item" to="/">
                  Главная
                </Link>
              </li>
              <li onClick={onClose}>
                <Link className="menu__item" to="/about">
                  О нас
                </Link>
              </li>
              <li onClick={onClose}>
                <Link className="menu__item" to="/tours">
                  Туры
                </Link>
              </li>
              <li onClick={onClose}>
                <a
                  href="/contacts"
                  className="menu__item"
                  onClick={handleContactClick}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </Drawer>
        </>
      ) : (
        <div className="hamburger-menu">
          <ul className="menu__box">
            <li>
              <Link className="menu__item" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/about">
                О нас
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/tours">
                Туры
              </Link>
            </li>
            <li>
              <a
                href="/contacts"
                className="menu__item"
                onClick={handleContactClick}
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
