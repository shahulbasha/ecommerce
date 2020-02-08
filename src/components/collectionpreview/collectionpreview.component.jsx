import React from "react";
import "./collectionpreview.styles.scss";
import CollectionItem from "../collectionitem/collectionitem.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title}</h1>
      <div className="collection-items">
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
