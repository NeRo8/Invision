import CategoryScreen from './CategoryScreen';
import { connect } from 'react-redux';

import { getCategories } from '../../../redux/actions/filtersAction';
import { getAds } from '../../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    data: state.filters.filters.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoriesList: () => {
      dispatch(getCategories());
    },
    getAdsList: filter => {
      dispatch(getAds(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
