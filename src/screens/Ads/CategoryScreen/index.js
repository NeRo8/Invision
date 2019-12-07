import CategoryScreen from './CategoryScreen';
import { connect } from 'react-redux';

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
