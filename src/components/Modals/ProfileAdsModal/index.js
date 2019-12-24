import ProfileAdsModal from './ProfileAdsModal';

import { connect } from 'react-redux';

import { deleteAds } from '../../../redux/actions/Users';

const mapDispatchToProps = dispatch => {
  return {
    deleteAd: (id, token) => {
      dispatch(deleteAds(id, token));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProfileAdsModal);
