import React from "react";
import "./menuitem.styles.scss";

const MenuItem = ({ title, imageUrl, id, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW!!</span>
      </div>
    </div>
  );
};

export default MenuItem;
