import Application from 'embroider-3--unplugin-plugin-loads-app-files/app';
import config from 'embroider-3--unplugin-plugin-loads-app-files/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
