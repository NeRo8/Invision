import HeaderAds from './HeaderAds';

import { connect } from 'react-redux';
import { getAds } from '../../redux/actions/adsAction';

const mapDispatchToProps = dispatch => {
  return {
    getAdsByQuery: q => {
      dispatch(getAds({ query: q }));
    },
  };
};

export default connect(null, mapDispatchToProps)(HeaderAds);
