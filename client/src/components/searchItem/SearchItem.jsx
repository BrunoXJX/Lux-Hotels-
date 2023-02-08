import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Taxi de graça desde o aeroporto</span>
        <span className="siSubtitle">
         Hotel com ar condicionado e serviço de quartos
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Cancelamento gratuito nas primeiras 72 horas </span>
        <span className="siCancelOpSubtitle">
        Verifique os preços e decida qual é o melhor para sí!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Inclui todo o tipo de taxas</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Aproveite Hoje!!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
