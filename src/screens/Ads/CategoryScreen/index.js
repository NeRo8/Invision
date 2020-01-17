import CategoryScreen from './CategoryScreen';

import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';

const mapStateToProps = state => {
  return {
    data: state.ads.categories.results,
    filters: state.ads.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoriesList: () => {
      dispatch(adsActions.getCategories());
    },
    getAdsList: filter => {
      dispatch(adsActions.getAds(filter));
    },
    setFilters: (name, value) => {
      dispatch(adsActions.setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
