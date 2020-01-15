import Ads from './Ads';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    grayscale: state.users.adsStatus,
  };
};

export default connect(mapStateToProps, null)(Ads);
