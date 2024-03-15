import * as virtualModule from 'build-plugin/registry';

console.log(virtualModule, Object.keys(virtualModule));
// sets window.myRegistry, so we can inspect
virtualModule.setup();

import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'embroider-3--unplugin-plugin-loads-app-files/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
