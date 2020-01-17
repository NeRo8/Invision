import EventsFilter from './EventsFilter';

import { connect } from 'react-redux';

import { eventsActions } from '../../../../redux/Events';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.events.categories.results,
    filters: state.inKuwait.events.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventsList: filters => {
      dispatch(eventsActions.getEvents(filters));
    },
    getCategoriesList: () => {
      dispatch(eventsActions.getCategories());
    },
    setFilters: (name, value) => {
      dispatch(eventsActions.setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsFilter);
