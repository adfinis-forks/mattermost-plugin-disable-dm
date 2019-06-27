const {connect} = window['react-redux'];

import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

function mapStateToProps(state) {
    const user = getCurrentUser(state) || {};
    return {
        user,
    };
}

function DisableDmAddButton() {
    function tryForAddChannelElement() {
        if (document.querySelector('#directChannel .add-channel-btn')) {
            document.querySelector('#directChannel .add-channel-btn').hidden = true;
        } else {
            window.requestAnimationFrame(tryForAddChannelElement);
        }
    }
    tryForAddChannelElement();
    return '';
}

class DisableDmPlugin {
    initialize(registry) {
        registry.registerRootComponent(DisableDmAddButton);
    }
}

window.registerPlugin('disable-dm', new DisableDmPlugin());

export default connect(mapStateToProps)(DisableDmPlugin);
