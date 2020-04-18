import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionoverview/collectionoverview.component";
import Collection from "../collection/collection.component";
import {
  firestore,
  convertCollectionsToMap,
} from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        updateCollections(convertCollectionsToMap(snapshot));
      }
    );
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
