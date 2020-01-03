import EventsDetail from './EventsDetail';

import { connect } from 'react-redux';
import { getEventsDetail } from '../../../../redux/actions/inKuwait/eventsAction';

const mapStateToProps = state => {
  return {
    eventsDetail: state.inKuwait.events.eventsDetail,
    loading: state.inKuwait.events.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => {
      dispatch(getEventsDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsDetail);
