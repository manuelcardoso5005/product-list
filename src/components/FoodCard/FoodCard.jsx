import "./FoodCard.css";

export default function FoodCard({ food }) {
  turn(
    <div className="food-card">
      <div className="food-card__img">
        <img src={food.img} alt={food.name} />
      </div>
    </div>
  );
}
