import { Link } from "react-router-dom";
import "./searchItemcity.css";

const SearchItemcity = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="img" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} km é tao perto</span>
        <span className="siTaxiOp">Viagem para o Hotel de Taxi Grátis </span>
        <span className="siSubtitle">Puro Luxo</span>
        
        <span className="siFeatures">{item.desc}</span>
        <span className="siFeatures"><h5>Tipo:</h5>{item.type}</span>
                <span className="siCancelOp">Cancelamento gratuido nas primeiras 72 horas</span>
                <span className="siCancelOpSubtitle">Podes cancelar mais tarde, então garante este ótimo preço hoje!</span>
      </div>
      <div className="siDetails">
        
        <div className="siDetailTexts">
          <span className="siPrice">€{item.cheapestPrice}</span>
          <span className="siTaxOp">Iva incluido </span>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItemcity;