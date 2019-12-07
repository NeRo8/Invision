import EventsMap from './EventsMap';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    eventsList: state.inKuwait.events.eventsList.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsMap);
