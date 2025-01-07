import Search from "./components/Search";
import PromotionalTours from "./components/promotional_tours/PromotionalTours";
import ServicesForTravelers from "./components/ServicesForTravelers";
import CarouselOfAuthorsTours from "./components/CarouselOfAuthorsTours";
import DescriptionOfPromotionalTours from "./components/promotional_tours/DescriptionOfPromotionalTours";

const MainPage= () => {
    return <>
    <Search />
    <h1 id='h1_prom_tours'>Акционные туры</h1>
    <PromotionalTours />
    <DescriptionOfPromotionalTours />
    <h1 style={{marginTop: "5vh", textAlign: "center", marginBottom: "5vh"}}>Авторские туры</h1>
    <CarouselOfAuthorsTours />
    <ServicesForTravelers />
    </>
}

export default MainPage;