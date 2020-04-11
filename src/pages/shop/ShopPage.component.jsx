import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionoverview/collectionoverview.component";
import Collection from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
};

export default ShopPage;
