import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";
import { WithSpinner } from "../spinner/with-spinner.component";
import CollectionOverview from "./collectionoverview.component";

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
