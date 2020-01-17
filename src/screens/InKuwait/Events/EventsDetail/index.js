import EventsDetail from './EventsDetail';

import { connect } from 'react-redux';

import { eventsActions } from '../../../../redux/Events';

const mapStateToProps = state => {
  return {
    eventsDetail: state.inKuwait.events.eventsDetail,
    loading: state.inKuwait.events.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => {
      dispatch(eventsActions.getEventsDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsDetail);
