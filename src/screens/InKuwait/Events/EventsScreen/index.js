import EventsScreen from './EventsScreen';

import { connect } from 'react-redux';
import { eventsActions } from '../../../../redux/Events';

const mapStateToProps = state => {
  return {
    eventsList: state.inKuwait.events.eventsList.results,
    filters: state.inKuwait.events.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventsList: filters => {
      dispatch(eventsActions.getEvents(filters));
    },
    setLoad: () => {
      dispatch(eventsActions.setLoading(true));
    },
    onSearch: text => {
      dispatch(eventsActions.setFilter('q', text));
    },
    setFilters: value => {
      dispatch(eventsActions.setFilter('status', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
