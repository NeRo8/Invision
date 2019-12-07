import FiltersScreen from './FiltersScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    filters: state.filters.filters,
    categories: state.filters.filters.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (name, value) => {
      dispatch(setFilter(name, value));
    },
    loadCategories: () => {
      dispatch(getCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
