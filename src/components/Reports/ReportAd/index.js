import ReportAd from './ReportAd';

import { connect } from 'react-redux';
import { adDetailActions } from '../../../redux/AdDetail';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setReportData: message => {
      dispatch(adDetailActions.reportAd(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportAd);
