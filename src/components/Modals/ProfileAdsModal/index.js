import ProfileAdsModal from './ProfileAdsModal';

import { connect } from 'react-redux';

import { deleteAds } from '../../../redux/actions/Users';

const mapStateToProps = state => {
  return {
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAd: (id, token) => {
      dispatch(deleteAds(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAdsModal);
