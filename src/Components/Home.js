import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered in Minutes!
          </h1>
          <p className="primary-text">
          Your Go-To for Fresh & Flavorful Eats.Savor the Flavor, Delivered Fresh to Your Door.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src="/newPhoto.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
