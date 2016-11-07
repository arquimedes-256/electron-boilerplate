// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import { remote } from 'electron'; // native electron module
import { greet } from './hello_world/hello_world'; // code authored by you in this project

var os = require('os');
var jetpack = require('fs-jetpack');

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

var env = appDir.read('env.json', 'json');

console.log('Loaded environment variables:', env);

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
