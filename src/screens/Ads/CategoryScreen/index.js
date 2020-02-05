import CategoryScreen from './CategoryScreen';

import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';

const mapStateToProps = state => {
  return {
    data: state.ads.categories.results,
    next: state.ads.categories.next,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoriesList: () => {
      dispatch(adsActions.getCategories());
    },
    setFilters: (name, value) => {
      dispatch(adsActions.setFilter(name, value));
    },
    getAllAds: () => {
      dispatch(adsActions.getAds());
    },
    loadMoreCategories: next => {
      dispatch(adsActions.getCategoriesLoadMore(next));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
