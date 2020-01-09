import ChooseCategoryScreen from './ChooseCategoryScreen';

import { connect } from 'react-redux';

import {
  getCategories,
  setReducerValue,
} from '../../../../redux/actions/AdCreate';

const mapStateToProps = state => {
  return {
    categories:
      state.adCreate.categories !== null
        ? state.adCreate.categories.results
        : [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(getCategories());
    },
    setCategory: value => {
      dispatch(setReducerValue('category', value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseCategoryScreen);
