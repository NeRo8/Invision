import AdsHeader from './AdsHeader';

import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';

const mapStateToProps = state => {
  return {
    filters: state.ads.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: () => {
      dispatch(adsActions.getAds());
    },
    setFilters: value => {
      dispatch(adsActions.setFilter('q', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsHeader);
