import CreateCommentScreen from './CreateCommentScreen';

import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    adId: state.ad.adDetail.pk,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: data => {
      dispatch(adsActions.setComment(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCommentScreen);
