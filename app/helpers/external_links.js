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

	// Convenient way for opening links in external browser, not in the app.
	// Useful especially if you have a lot of links to deal with.
	//
	// Usage:
	//
	// Every link with class ".js-external-link" will be opened in external browser.
	// <a class="js-external-link" href="http://google.com">google</a>
	//
	// The same behaviour for many links can be achieved by adding
	// this class to any parent tag of an anchor tag.
	// <p class="js-external-link">
	//    <a href="http://google.com">google</a>
	//    <a href="http://bing.com">bing</a>
	// </p>

	(function () {
	    'use strict';

	    var shell = __webpack_require__(1).shell;

	    var supportExternalLinks = function supportExternalLinks(e) {
	        var href;
	        var isExternal = false;

	        var checkDomElement = function checkDomElement(element) {
	            if (element.nodeName === 'A') {
	                href = element.getAttribute('href');
	            }
	            if (element.classList.contains('js-external-link')) {
	                isExternal = true;
	            }
	            if (href && isExternal) {
	                shell.openExternal(href);
	                e.preventDefault();
	            } else if (element.parentElement) {
	                checkDomElement(element.parentElement);
	            }
	        };

	        checkDomElement(e.target);
	    };

	    document.addEventListener('click', supportExternalLinks, false);
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ }
/******/ ]);