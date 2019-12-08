import CategoryScreen from './CategoryScreen';

import { connect } from 'react-redux';

import { getCategories, getAds, setFilter } from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    data: state.ads.categories.results,
    filters: state.ads.filters,
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
    setFilters: (name, value) => {
      dispatch(setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
