import CreateCommentScreen from './CreateCommentScreen';

import { connect } from 'react-redux';

import { adDetailActions } from '../../../redux/AdDetail';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    adId: state.ad.adDetail.pk,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: data => {
      dispatch(adDetailActions.sendComment(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCommentScreen);
