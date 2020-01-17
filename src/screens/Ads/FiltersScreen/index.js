import FiltersScreen from './FiltersScreen';
import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';

const mapStateToProps = state => {
  return {
    filters: state.ads.filters,
    categories: state.ads.categories.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (name, value) => {
      dispatch(adsActions.setFilter(name, value));
    },
    getCategoriesList: () => {
      dispatch(adsActions.getCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
