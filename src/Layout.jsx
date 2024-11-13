import FoodCard from "./components/FoodCard/FoodCard.jsx";

function Layout() {
  return (
    <>
      <section className="left-side">
        <div className="food-container">
          <h1 className="food-container-title">Desserts</h1>
          <div className="food-content">
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </section>
      <section>Right</section>
    </>
  );
}

export default Layout;
