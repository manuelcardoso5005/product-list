import "./Card.css";
import closeIcon from "../../assets/images/icon-remove-item.svg";

export default function Card({ children }) {
  return (
    <li className="card">
      <div className="left-li">
        <p className="left-li-food-name">Food name</p>
        <div className="left-li-price-group">
          <p className="left-li-qtd">1x</p>
          <p className="left-li-price">@ $7.1</p>
          <p className="left-li-total-price">$14</p>
        </div>
      </div>
      <div className="right-li">
        <img src={closeIcon} alt="" />
      </div>
    </li>
  );
}
