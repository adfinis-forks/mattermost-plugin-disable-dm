import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/common';

import Root from './root.jsx';

const mapStateToProps = (state) => ({
    user: getCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Root);
