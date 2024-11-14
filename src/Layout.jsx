import { useState, useEffect } from "react";
import FoodCard from "./components/FoodCard/FoodCard.jsx";
import Card from "./components/Card/Card.jsx";
import emptyCart from "./assets/images/illustration-empty-cart.svg";
import treeIcon from "./assets/images/icon-carbon-neutral.svg";

function Layout() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const getImageLink = (image) => {
    if (screenSize < 375) {
      return image.mobile;
    } else if (screenSize >= 375 && screenSize < 1440) {
      return image.tablet;
    } else {
      return image.desktop;
    }
  };

  // Imagens com links para diferentes tamanhos de tela
  const images = [
    {
      mobile: "https://i.ibb.co/TKZFyS5/image-waffle-mobile.jpg",
      tablet: "https://i.ibb.co/s6THN6f/image-waffle-tablet.jpg",
      desktop: "https://i.ibb.co/qd6Q2CQ/image-waffle-desktop.jpg",
      food_name: "Waffle",
      food_full_name: "Waffle with Berries",
      food_price: "6.50",
    },
    {
      mobile: "https://i.ibb.co/rtKZrsB/image-creme-brulee-mobile.jpg",
      tablet: "https://i.ibb.co/Zg79S1D/image-creme-brulee-tablet.jpg",
      desktop: "https://i.ibb.co/BswBJTX/image-creme-brulee-desktop.jpg",
      food_name: "Crème Brûlée",
      food_full_name: "Vanilla Bean Crème Brûlée",
      food_price: "7.00",
    },
    {
      mobile: "https://i.ibb.co/mCzxVL2/image-macaron-mobile.jpg",
      tablet: "https://i.ibb.co/4VFsccQ/image-macaron-tablet.jpg",
      desktop: "https://i.ibb.co/6Ygj5Dj/image-macaron-desktop.jpg",
      food_name: "Macaron",
      food_full_name: "Macaron Mix of Five",
      food_price: "8.00",
    },
    {
      mobile: "https://i.ibb.co/D1Vd2wz/image-tiramisu-mobile.jpg",
      tablet: "https://i.ibb.co/JpfpxKW/image-tiramisu-tablet.jpg",
      desktop: "https://i.ibb.co/W0QYkNG/image-tiramisu-desktop.jpg",
      food_name: "Tiramisu",
      food_full_name: "Classic Tiramisu",
      food_price: "5.50",
    },
    {
      mobile: "https://i.ibb.co/fFC5BqS/image-baklava-mobile.jpg",
      tablet: "https://i.ibb.co/N3MBvJ7/image-baklava-tablet.jpg",
      desktop: "https://i.ibb.co/rFND550/image-baklava-desktop.jpg",
      food_name: "Baklava",
      food_full_name: "Pistachio Baklava",
      food_price: "4.00",
    },
    {
      mobile: "https://i.ibb.co/TLbMK49/image-meringue-mobile.jpg",
      tablet: "https://i.ibb.co/6Ndjnfw/image-meringue-tablet.jpg",
      desktop: "https://i.ibb.co/p3CD3Dz/image-meringue-desktop.jpg",
      food_name: "Pie",
      food_full_name: "Lemon Meringue Pie",
      food_price: "5.00",
    },
    {
      mobile: "https://i.ibb.co/tq3s0dN/image-cake-mobile.jpg",
      tablet: "https://i.ibb.co/xHNJP5R/image-cake-tablet.jpg",
      desktop: "https://i.ibb.co/5vk4wBT/image-cake-desktop.jpg",
      food_name: "Cake",
      food_full_name: "Red Velvet Cake",
      food_price: "4.50",
    },
    {
      mobile: "https://i.ibb.co/WKz8dV1/image-brownie-mobile.jpg",
      tablet: "https://i.ibb.co/gmRgfTc/image-brownie-tablet.jpg",
      desktop: "https://i.ibb.co/MkRzFqd/image-brownie-desktop.jpg",
      food_name: "Brownie",
      food_full_name: "Salted Caramel Brownie",
      food_price: "4.50",
    },
    {
      mobile: "https://i.ibb.co/h1xrF3f/image-panna-cotta-mobile.jpg",
      tablet: "https://i.ibb.co/ftFJLZm/image-panna-cotta-tablet.jpg",
      desktop: "https://i.ibb.co/cgHPwX9/image-panna-cotta-desktop.jpg",
      food_name: "Panna Cotta",
      food_full_name: "Vanilla Panna Cotta",
      food_price: "6.50",
    },
  ];

  return (
    <div id="container">
      <section className="left-side">
        <div className="food-container">
          <h1 className="food-container-title">Desserts</h1>
          <div className="food-content">
            {images.map((image, index) => (
              <FoodCard
                key={index}
                food_image={getImageLink(image)}
                food_name={image.food_name}
                food_full_name={image.food_full_name}
                food_price={`$ ${image.food_price}`}
                onClick={() => setSelectedIndex(index + 1)} // Incrementa o índice para começar de 1
              />
            ))}
          </div>
        </div>
      </section>
      <section className="right-side">
        <div className="rs-container">
          <h1>Your Cart ({selectedIndex || 0})</h1>{" "}
          <div className="empty-cart hide">
            <img src={emptyCart} alt="" />
            <p className="empty-text">Your added items will appear here</p>
          </div>
          <div className="cart-container">
            <ul className="cr-container">
              <Card />
              <Card />
              <Card />
            </ul>
            <div>
              <div className="price_cart">
                <p>Order Total</p>
                <p className="price_cart_text">$46.50</p>
              </div>
              <div className="price_sms">
                <img src={treeIcon} alt="" />
                <p>
                  This is a <span>Carbon-neutral</span> delivery
                </p>
              </div>
              <button className="btn-order">Confirm Order</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout;
