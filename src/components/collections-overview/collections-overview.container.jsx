import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
   //modified this from the course that only had 
   // isLoading: selectIsCollectionsFetching
   isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsOverviewContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

