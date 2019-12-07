import EventsScreen from './EventsScreen';

import { connect } from 'react-redux';
import {
  getEvents,
  setLoading,
} from '../../../../redux/actions/inKuwait/eventsAction';

const mapStateToProps = state => {
  return {
    eventsList: state.inKuwait.events.eventsList.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventsList: filters => {
      dispatch(getEvents(filters));
    },
    setLoad: () => {
      dispatch(setLoading(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
