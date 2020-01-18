import AdsBlock from './AdsBlock';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  getAdData: id => {
    dispatch(adDetailActions.getAdDetail(id));
  },
});

export default connect(null, mapDispatchToProps)(AdsBlock);
