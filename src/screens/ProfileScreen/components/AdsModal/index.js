import AdsModal from './AdsModal';

import { connect } from 'react-redux';

import { deleteAds } from '../../../../redux/actions/Users';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAd: (id, token) => {
      dispatch(deleteAds(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsModal);
