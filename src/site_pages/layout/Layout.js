import { Routes, Route } from "react-router-dom";
import AboutUs from '../about_us/AboutUs';
import Header from '../layout/components/Headers';
import Footer from '../layout/components/Footer'
import MainPage from "../main_page/MainPage";
import Tours from "../tours/components/Tours";
import PageOfTour from "../tours/components/PageOfTour";
import { FloatButton } from 'antd';


const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/tours" element={<Tours />}/>
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:tourId" element={<PageOfTour />} />
      </Routes>
      <FloatButton.BackTop tooltip="В начало" visibilityHeight="700" />
      <Footer />
    </>
  );
}

export default Layout;