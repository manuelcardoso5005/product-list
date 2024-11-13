import { useState } from "react";
import "./FoodCard.css";
import addChartIcon from "../../assets/images/icon-add-to-cart.svg";

export default function FoodCard({
  food_image,
  food_name,
  food_full_name,
  food_price,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="food-card">
      <div className="food-card__img">
        <img src={food_image} alt="" className="food_img" />
      </div>
      <div
        className="add-cart-container"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        {!isClicked ? (
          <div className="add-cart-container__text">
            <img src={addChartIcon} alt="Add to cart" />
            <p>Add to Cart</p>
          </div>
        ) : (
          <div className="add-cart-container__value">
            <div
              className="icon-crement add-cart-container__value__decrement"
              onClick={(e) => {
                e.stopPropagation(); 
                decrementCount();
              }}
            >
              -
            </div>
            <div className="add-cart-container__value__count">{count}</div>
            <div
              className="icon-crement add-cart-container__value__increment"
              onClick={(e) => {
                e.stopPropagation();
                incrementCount();
              }}
            >
              +
            </div>
          </div>
        )}
      </div>
      <div className="food-details">
        <h3 className="food_name">{food_name}</h3>
        <p className="food_full_name">{food_full_name}</p>
        <span className="food_price">{food_price}</span>
      </div>
    </div>
  );
}
