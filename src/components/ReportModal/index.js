import ReportModal from './ReportModal';

import { connect } from 'react-redux';
import { adDetailActions } from '../../redux/AdDetail';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setReportData: (idForReport, message) => {
      dispatch(adDetailActions.reportAd(idForReport, message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportModal);
