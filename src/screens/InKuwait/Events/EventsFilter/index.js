import EventsFilter from './EventsFilter';

import { connect } from 'react-redux';
import {
  getCategories,
  setFilter,
  getEvents,
} from '../../../../redux/actions/inKuwait/eventsAction';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.events.categories.results,
    filters: state.inKuwait.events.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventsList: filters => {
      dispatch(getEvents(filters));
    },
    getCategoriesList: () => {
      dispatch(getCategories());
    },
    setFilters: (name, value) => {
      dispatch(setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsFilter);
