import CreateCommentScreen from './CreateCommentScreen';

import { connect } from 'react-redux';

import { setComment } from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    adId: state.ads.adData.pk,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (data, token) => {
      dispatch(setComment(data, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCommentScreen);
