import FoodCard from "./components/FoodCard/FoodCard.jsx";

function Layout() {
  return (
    <>
      <section className="left-side">
        <div className="food-container">
          <h1 className="food-container-title">Desserts</h1>
          <div className="food-content">
            <FoodCard food_image="https://i.ibb.co/qd6Q2CQ/image-waffle-desktop.jpg" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
            <FoodCard food_image="" />
          </div>
        </div>
      </section>
      <section>Right</section>
    </>
  );
}

export default Layout;
