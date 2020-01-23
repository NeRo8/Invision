import AdsModal from './AdsModal';

import { connect } from 'react-redux';

import { usersActions } from '../../../../redux/Users';

const mapStateToProps = state => {
  return {
    adStatus: state.users.adsStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAdStatus: (id, status) => {
      dispatch(usersActions.updateAdStatus(id, status));
    },
    deleteAd: id => {
      dispatch(usersActions.deleteAds(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsModal);
