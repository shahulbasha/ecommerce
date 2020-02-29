import React from "react";
import "./collectionitem.styles.scss";
import CustomButton from "../custombutton/custombutton.component";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
