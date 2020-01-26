import React from "react";
import "./Homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directorymenu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW!!</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW!!</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> SNEAKERS</h1>
            <span className="subtitle">SHOP NOW!!</span>
          </div>
        </div>
        <div className="menu-item menu-item-men">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW!!</span>
          </div>
        </div>
        <div className="menu-item menu-item-women">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW!!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
