import AdsBlock from './AdsBlock';

import { connect } from 'react-redux';

import { adDetailActions } from '../../../../../redux/AdDetail';

const mapDispatchToProps = dispatch => ({
  getAdData: id => {
    dispatch(adDetailActions.getAdDetail(id));
  },
});

export default connect(null, mapDispatchToProps)(AdsBlock);
