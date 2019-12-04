import FiltersScreen from './FiltersScreen';
import { connect } from 'react-redux';
import { setFilter } from '../../../redux/actions/filtersAction';

const mapStateToProps = state => {
  return {
    filters: state.filters.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (name, value) => {
      dispatch(setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
