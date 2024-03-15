import EmberRouter from '@ember/routing/router';
import config from 'embroider-3--unplugin-plugin-loads-app-files/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
