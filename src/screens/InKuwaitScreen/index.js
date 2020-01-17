import { connect } from 'react-redux';

import InKuwaitScreen from './InKuwaitScreen';

import { inKuwaitActions } from '../../redux/inKuwait';

const mapStateToProps = state => {
  return {
    countList: state.inKuwait.main.countList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountCategory: () => {
      dispatch(inKuwaitActions.getCountList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InKuwaitScreen);
