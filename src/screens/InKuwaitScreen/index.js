import { connect } from 'react-redux';

import InKuwaitScreen from './InKuwaitScreen';

import { getCountList } from '../../redux/actions/inKuwait';

const mapStateToProps = state => {
  return {
    countList: state.inKuwait.main.countList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountCategory: () => {
      dispatch(getCountList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InKuwaitScreen);
