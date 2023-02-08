import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Worldly from "./images/Worldly.jpg"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       {}
  <div>
    <img className="logohome" src={Worldly} alt="" />
  </div>
  

      </div>
    </div>
  );
};

export default Home;
