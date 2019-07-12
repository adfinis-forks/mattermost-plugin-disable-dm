import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../config.json';

// const parseDomains = (raw) => raw.split('\n').map((d) => d.trim());

export default class Root extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    get shouldHide() {
        try {
            // const config = getConfig(state);
            // const settings = config.PluginSettings.Plugins['disable-dm'];
            // const allowedDomains = parseDomains(settings.alloweddomains);
            const {allowedDomains} = config;

            const domain = this.props.user.email.split('@').pop();

            return !allowedDomains.includes(domain);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('[disable-dm]: could not initialize properly', e);

            return false;
        }
    }

    hideElement(selector) {
        const el = document.querySelector(selector);

        if (el) {
            el.style.display = 'none';
        } else {
            requestAnimationFrame(() => this.hideElement(selector));
        }
    }

    hide() {
        if (this.shouldHide) {
            config.hiddenElements.forEach((selector) => {
                this.hideElement(selector);
            });
        }
    }

    render() {
        this.hide();

        return null;
    }
}
