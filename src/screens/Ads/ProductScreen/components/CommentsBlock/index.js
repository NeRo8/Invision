import CommentsBlock from './CommentsBlock';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authStatus: state.auth.authStatus,
});

export default connect(mapStateToProps, null)(CommentsBlock);
