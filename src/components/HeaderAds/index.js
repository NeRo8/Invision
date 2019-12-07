import HeaderAds from './HeaderAds';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    getAdsByQuery: q => {
      dispatch(getAds({ query: q }));
    },
  };
};

export default connect(null, mapDispatchToProps)(HeaderAds);
