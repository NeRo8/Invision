import FiltersScreen from './FiltersScreen';
import { connect } from 'react-redux';
import { getCategories } from '../../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    categoriesList: state.ads.categoriesList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryList: () => {
      dispatch(getCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
