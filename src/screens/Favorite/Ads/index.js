import Ads from './Ads';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    error: state,
  };
};

export default connect(mapStateToProps, null)(Ads);
