import AdsModal from './AdsModal';

import { connect } from 'react-redux';

import { usersActions } from '../../../../redux/Users';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAd: (id, token) => {
      dispatch(usersActions.deleteAds(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsModal);
