/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This gives you default context menu (cut, copy, paste)
	// in all input fields and textareas across your app.

	(function () {
	    'use strict';

	    var remote = __webpack_require__(1).remote;
	    var Menu = remote.Menu;
	    var MenuItem = remote.MenuItem;

	    var isAnyTextSelected = function isAnyTextSelected() {
	        return window.getSelection().toString() !== '';
	    };

	    var cut = new MenuItem({
	        label: "Cut",
	        click: function click() {
	            document.execCommand("cut");
	        }
	    });

	    var copy = new MenuItem({
	        label: "Copy",
	        click: function click() {
	            document.execCommand("copy");
	        }
	    });

	    var paste = new MenuItem({
	        label: "Paste",
	        click: function click() {
	            document.execCommand("paste");
	        }
	    });

	    var normalMenu = new Menu();
	    normalMenu.append(copy);

	    var textEditingMenu = new Menu();
	    textEditingMenu.append(cut);
	    textEditingMenu.append(copy);
	    textEditingMenu.append(paste);

	    document.addEventListener('contextmenu', function (e) {
	        switch (e.target.nodeName) {
	            case 'TEXTAREA':
	            case 'INPUT':
	                e.preventDefault();
	                textEditingMenu.popup(remote.getCurrentWindow());
	                break;
	            default:
	                if (isAnyTextSelected()) {
	                    e.preventDefault();
	                    normalMenu.popup(remote.getCurrentWindow());
	                }
	        }
	    }, false);
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ }
/******/ ]);