import ChooseCategoryScreen from './ChooseCategoryScreen';

import { connect } from 'react-redux';

import { adCreateActions } from '../../../../redux/AdCreate';

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
      dispatch(adCreateActions.getCategories());
    },
    setCategory: value => {
      dispatch(adCreateActions.setReducerValue('category', value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseCategoryScreen);
