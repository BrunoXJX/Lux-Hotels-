import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />   
      <Header/>
      <div className="homeContainer">
        <p></p>
      <h1 className="homeTitle">A Nossas Melhores Cidades</h1>
        <Featured/>
        <PropertyList/>
        <h1 className="homeTitle">Os Nosso Hoteis Procurado</h1>
        <FeaturedProperties/>´
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
