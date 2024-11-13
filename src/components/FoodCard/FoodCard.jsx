import "./FoodCard.css";

export default function FoodCard({ food_image }) {
  return (
    <div className="food-card">
      <div
        className="food-card__img"
        style={{ backgroundImage: `url(${food_image})` }}
      ></div>
    </div>
  );
}
