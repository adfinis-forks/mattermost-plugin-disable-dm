import Root from './components/root';

class DisableDmPlugin {
    initialize(registry) {
        registry.registerRootComponent(Root);
    }
}

window.registerPlugin('disable-dm', new DisableDmPlugin());
