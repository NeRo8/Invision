import EventsScreen from './EventsScreen';

import { connect } from 'react-redux';
import {
  getEvents,
  setLoading,
  setFilter,
} from '../../../../redux/actions/inKuwait/eventsAction';

const mapStateToProps = state => {
  return {
    eventsList: state.inKuwait.events.eventsList.results,
    filters: state.inKuwait.events.filters,
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
    onSearch: text => {
      dispatch(setFilter('q', text));
    },
    setFilters: value => {
      dispatch(setFilter('status', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
