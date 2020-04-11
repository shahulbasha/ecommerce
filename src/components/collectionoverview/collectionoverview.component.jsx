import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "./../../redux/shop/shop-selectors";

import CollectionPreview from "./../collectionpreview/collectionpreview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collectionOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
