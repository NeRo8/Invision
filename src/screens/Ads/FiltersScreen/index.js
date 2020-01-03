import FiltersScreen from './FiltersScreen';
import { connect } from 'react-redux';

import {
  setFilter,
  getCategories,
  setLoading,
} from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    filters: state.ads.filters,
    categories: state.ads.categories.results,
    loading: state.ads.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (name, value) => {
      dispatch(setFilter(name, value));
    },
    getCategoriesList: () => {
      dispatch(getCategories());
    },
    setLoad: () => {
      dispatch(setLoading(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
