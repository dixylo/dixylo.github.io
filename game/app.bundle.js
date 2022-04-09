/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/audios/bg.mp3":
/*!******************************!*\
  !*** ./assets/audios/bg.mp3 ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f59b9f245ca454d7617e6081712a7352.mp3\");\n\n//# sourceURL=webpack:///./assets/audios/bg.mp3?");

/***/ }),

/***/ "./assets/audios/ouch.mp3":
/*!********************************!*\
  !*** ./assets/audios/ouch.mp3 ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e92903449b4287b41356eff837eb0cb8.mp3\");\n\n//# sourceURL=webpack:///./assets/audios/ouch.mp3?");

/***/ }),

/***/ "./assets/audios/outro.mp3":
/*!*********************************!*\
  !*** ./assets/audios/outro.mp3 ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7ef782c671cb3f920af51be09653426e.mp3\");\n\n//# sourceURL=webpack:///./assets/audios/outro.mp3?");

/***/ }),

/***/ "./assets/audios/uhoh.mp3":
/*!********************************!*\
  !*** ./assets/audios/uhoh.mp3 ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"76cd3b0594ffdfb4008c8a2bad971a4a.mp3\");\n\n//# sourceURL=webpack:///./assets/audios/uhoh.mp3?");

/***/ }),

/***/ "./assets/audios/yay.mp3":
/*!*******************************!*\
  !*** ./assets/audios/yay.mp3 ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"27f15c6216d7d9184fac93a0f497405a.mp3\");\n\n//# sourceURL=webpack:///./assets/audios/yay.mp3?");

/***/ }),

/***/ "./assets/fonts/Bubblegum.ttf":
/*!************************************!*\
  !*** ./assets/fonts/Bubblegum.ttf ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b40c0a33d6da693239b1e9aff72e52cb.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Bubblegum.ttf?");

/***/ }),

/***/ "./assets/images/basket.png":
/*!**********************************!*\
  !*** ./assets/images/basket.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"99b299fe0b8c72f47dd92bd17caade39.png\");\n\n//# sourceURL=webpack:///./assets/images/basket.png?");

/***/ }),

/***/ "./assets/images/cover.jpg":
/*!*********************************!*\
  !*** ./assets/images/cover.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dfa72c3d25e66b2eba0732538ce25d08.jpg\");\n\n//# sourceURL=webpack:///./assets/images/cover.jpg?");

/***/ }),

/***/ "./assets/images/eric.png":
/*!********************************!*\
  !*** ./assets/images/eric.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ffae5d111c1d243b4e8593b238992683.png\");\n\n//# sourceURL=webpack:///./assets/images/eric.png?");

/***/ }),

/***/ "./assets/images/favicon.ico":
/*!***********************************!*\
  !*** ./assets/images/favicon.ico ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e8dbd8f3df0f359a3b17aa846920a58b.ico\");\n\n//# sourceURL=webpack:///./assets/images/favicon.ico?");

/***/ }),

/***/ "./assets/images/grassland.jpg":
/*!*************************************!*\
  !*** ./assets/images/grassland.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"28e1b488c5e1e74f154aa6d1948a2ac0.jpg\");\n\n//# sourceURL=webpack:///./assets/images/grassland.jpg?");

/***/ }),

/***/ "./assets/images/mouth.png":
/*!*********************************!*\
  !*** ./assets/images/mouth.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"25531607664659ecbec80718fd421907.png\");\n\n//# sourceURL=webpack:///./assets/images/mouth.png?");

/***/ }),

/***/ "./assets/images/tree.jpg":
/*!********************************!*\
  !*** ./assets/images/tree.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8381b4b4516d40fdf44374a6c3085030.jpg\");\n\n//# sourceURL=webpack:///./assets/images/tree.jpg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Bubblegum.ttf */ \"./assets/fonts/Bubblegum.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/images/grassland.jpg */ \"./assets/images/grassland.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"html, body {\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  color: #333;\\n  font-family: Bubblegum;\\n}\\n\\n@font-face {\\n  font-family: Bubblegum;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\ninput:hover {\\n  cursor: pointer;\\n}\\n\\nbutton {\\n  margin: 5px;\\n  padding: 10px;\\n  width: 130px;\\n  border-radius: 5px;\\n  color: #333;\\n  font-size: 1rem;\\n  font-family: Bubblegum;\\n  white-space: nowrap;\\n}\\n\\nbutton:hover {\\n  cursor: pointer;\\n  background-color: #f0f1f2;\\n}\\n\\n#divBackground {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: -1;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  filter: blur(8px);\\n}\\n\\n#divContainer {\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n}\\n\\n#divCanvas {\\n  border-width: 5px 5px 2.5px 5px;\\n  border-style: inset;\\n  background-color: #EEEEEE;\\n}\\n\\n#divControl {\\n  width: 600px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-radius: 5px;\\n}\\n\\n#divSound {\\n  padding: 8.5px 10px;\\n  border-radius: 5px;\\n  background-color: #ffffff;\\n}\\n\\n#divHowTo {\\n  padding: 5px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Basket.js":
/*!***********************!*\
  !*** ./src/Basket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n\nvar BASKET_WIDTH = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BASKET_WIDTH,\n    BASKET_HEIGHT = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BASKET_HEIGHT,\n    RIGHT_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RIGHT_BOUND,\n    LOWER_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOWER_BOUND,\n    dY = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dY,\n    SPEED = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SPEED;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  x: RIGHT_BOUND,\n  y: LOWER_BOUND + dY,\n  width: BASKET_WIDTH,\n  height: BASKET_HEIGHT,\n  speed: SPEED,\n  reset: function reset() {\n    // back to the initial position when game is restarted\n    this.x = RIGHT_BOUND;\n    this.y = LOWER_BOUND + dY;\n    this.width = BASKET_WIDTH;\n    this.height = BASKET_HEIGHT;\n    this.speed = SPEED;\n  }\n});\n\n//# sourceURL=webpack:///./src/Basket.js?");

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CANVAS_WIDTH = 800;\nvar CANVAS_HEIGHT = 500;\nvar INTERVAL = 10; // interval of updating the canvas, in milliseconds\n\nvar SPEED = 200; // speed of moving Eric and basket\n\nvar GROW_TIME = 5; // growing time of an orange, in seconds\n\nvar RIPE_TIME = 4; // riping time of an orange, in seconds\n\nvar HANG_TIME = 3; // hanging time of an orange, in seconds\n\nvar FALL_TIME = 6; // falling time of an orange, in seconds\n\nvar BORN_RADIUS = 6; // born radius of an orange, in px\n\nvar RIPE_RADIUS = 30; // radius of a ripe orange, in px\n\nvar STUB_RADIUS = 3; // radius of the stub, in px\n\nvar STUB_OFFSET = 25; // distance between the center of an orange and of its stub\n\nvar BASKET_WIDTH = 116; // basket and head geometrics are used to detect collision only, not reflecting real shapes\n\nvar BASKET_HEIGHT = 1;\nvar HEAD_WIDTH = 85;\nvar HEAD_HEIGHT = 1;\nvar dX = (BASKET_WIDTH + HEAD_WIDTH) / 2; // horizontal distance between the basket and head centers\n\nvar dY = 50; // vertical distance between basket.y and head.y\n\nvar UPPER_BOUND = CANVAS_HEIGHT * 2 / 3; // the uppermost the head can reach\n\nvar LOWER_BOUND = CANVAS_HEIGHT - 115; // the lowermost the head can reach, 115 being an offset considering Eric is 128px tall\n\nvar LEFT_BOUND = 10; // the leftmost the left end of the basket can reach\n\nvar RIGHT_BOUND = CANVAS_WIDTH - LEFT_BOUND - BASKET_WIDTH; // the rightmost the left end of the basket can reach\n\nvar IRIS_X1 = 27; // x Offset of the left iris\n\nvar IRIS_X2 = 49; // x Offset of the right iris\n\nvar IRIS_Y = 26; // y Offset of the irises\n\nvar PATH_L = 15; // path length\n\nvar PATH_W = 4; // path width\n\nvar IRIS_RADIUS = 2; // iris radius\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  CANVAS_WIDTH: CANVAS_WIDTH,\n  CANVAS_HEIGHT: CANVAS_HEIGHT,\n  INTERVAL: INTERVAL,\n  SPEED: SPEED,\n  GROW_TIME: GROW_TIME,\n  RIPE_TIME: RIPE_TIME,\n  HANG_TIME: HANG_TIME,\n  FALL_TIME: FALL_TIME,\n  BORN_RADIUS: BORN_RADIUS,\n  RIPE_RADIUS: RIPE_RADIUS,\n  STUB_RADIUS: STUB_RADIUS,\n  STUB_OFFSET: STUB_OFFSET,\n  BASKET_WIDTH: BASKET_WIDTH,\n  BASKET_HEIGHT: BASKET_HEIGHT,\n  HEAD_WIDTH: HEAD_WIDTH,\n  HEAD_HEIGHT: HEAD_HEIGHT,\n  dX: dX,\n  dY: dY,\n  UPPER_BOUND: UPPER_BOUND,\n  LOWER_BOUND: LOWER_BOUND,\n  LEFT_BOUND: LEFT_BOUND,\n  RIGHT_BOUND: RIGHT_BOUND,\n  IRIS_X1: IRIS_X1,\n  IRIS_X2: IRIS_X2,\n  IRIS_Y: IRIS_Y,\n  PATH_L: PATH_L,\n  PATH_W: PATH_W,\n  IRIS_RADIUS: IRIS_RADIUS\n});\n\n//# sourceURL=webpack:///./src/Constants.js?");

/***/ }),

/***/ "./src/Control.js":
/*!************************!*\
  !*** ./src/Control.js ***!
  \************************/
/*! exports provided: start, pause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pause\", function() { return pause; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ \"./src/Media.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Draw */ \"./src/Draw.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Score */ \"./src/Score.js\");\n/* harmony import */ var _Orange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Orange */ \"./src/Orange.js\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Head */ \"./src/Head.js\");\n/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Basket */ \"./src/Basket.js\");\n/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Move */ \"./src/Move.js\");\n\n\n\n\n\n\n\n\n\nvar CANVAS_WIDTH = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_WIDTH,\n    CANVAS_HEIGHT = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_HEIGHT,\n    dX = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dX;\nvar soundBg = _Media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundBg,\n    soundOutro = _Media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOutro;\nvar context = _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getContext();\nvar oranges = []; // used to hold orange instances\n\nvar draw = new _Draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"](context);\nvar score = new _Score__WEBPACK_IMPORTED_MODULE_4__[\"default\"](context, oranges);\nvar time = 0; // current time\n\nvar countClick = 0; // count how many times the button is clicked\n\nvar isPaused = false; // Draw all the things on canvas\n\nfunction render() {\n  _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clear(); // Check if we should generate a new orange to start move\n\n  if (Math.random() < 0.005) {\n    // Control the frequency of generating new oranges\n    var xi = Math.floor(Math.random() * CANVAS_WIDTH); // Generate oranges across the canvas\n\n    var yi = Math.floor(Math.random() * CANVAS_HEIGHT / 5); // Generate oranges only in the upper fifth of the canvas\n\n    oranges.push(new _Orange__WEBPACK_IMPORTED_MODULE_5__[\"default\"](context, xi, yi)); // Store the generated orange instance\n  } // Update the position of the oranges\n\n\n  for (var i = oranges.length - 1; i >= 0; i--) {\n    oranges[i].update();\n  }\n\n  draw.head(); // Draw Eric the collector\n\n  draw.orangesInBasket(score.countCatch); // Draw oranges in basket.\n  // Switch the side of the basket: Head left, basket left; vice versa.\n\n  _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].x = _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].x + _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].width / 2 >= CANVAS_WIDTH / 2 ? _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].x + _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].width / 2 - _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].width / 2 + dX : _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].x + _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].width / 2 - _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].width / 2 - dX;\n  draw.basket(); // Draw the basket\n\n  score.checkCatch(_Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].x, _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].y, _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].width, _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].height); // Check that an orange is catched\n\n  score.checkHit(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].x, _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].y, _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].width, _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].height); // Check that an orange hits the head\n\n  score.display(); // Update score\n\n  score.countDown(); // Update time left\n} // Capsule the key control and object drawing\n\n\nfunction run() {\n  Object(_Move__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((Date.now() - time) / 1000);\n  render();\n  time = Date.now();\n\n  if (score.timeLeft <= 0) {\n    _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop();\n    soundOutro.play();\n    soundBg.stop();\n    alert(\"Time is up! You scored \" + score.score + \"!\");\n  }\n}\n\nfunction start(divCanvas, btnStart, btnPause) {\n  if (countClick > 0) {\n    // Make sure all is renewed if game is restarted\n    _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop();\n    _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clear();\n    _Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"].reset();\n    _Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"].reset();\n    soundBg.stop();\n    score.reset();\n    oranges.splice(0, oranges.length);\n    isPaused = false;\n    btnPause.innerHTML = \"Pause Game\";\n  } else {\n    divCanvas.removeChild(divCanvas.childNodes[0]); // Remove the cover image before entering game for 1st time\n  }\n\n  _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start(run, divCanvas);\n  btnStart.innerHTML = \"Restart Game\";\n  btnPause.style.display = \"inline\";\n  countClick += 1;\n  soundBg.play();\n}\nfunction pause(btnPause) {\n  if (isPaused) {\n    _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resume(run);\n    soundBg.play();\n  } else {\n    _Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop();\n    soundBg.stop();\n  }\n\n  isPaused = !isPaused;\n  btnPause.innerHTML = isPaused ? \"Resume Game\" : \"Pause Game\";\n}\n\n//# sourceURL=webpack:///./src/Control.js?");

/***/ }),

/***/ "./src/Draw.js":
/*!*********************!*\
  !*** ./src/Draw.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Head */ \"./src/Head.js\");\n/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Basket */ \"./src/Basket.js\");\n/* harmony import */ var _assets_images_mouth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/mouth.png */ \"./assets/images/mouth.png\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Media */ \"./src/Media.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar IRIS_X1 = _Constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].IRIS_X1,\n    IRIS_X2 = _Constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].IRIS_X2,\n    IRIS_Y = _Constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].IRIS_Y,\n    PATH_L = _Constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PATH_L,\n    PATH_W = _Constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PATH_W,\n    IRIS_RADIUS = _Constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].IRIS_RADIUS;\nvar headImage = _Media__WEBPACK_IMPORTED_MODULE_4__[\"default\"].headImage,\n    basketImage = _Media__WEBPACK_IMPORTED_MODULE_4__[\"default\"].basketImage;\n\nvar Draw =\n/*#__PURE__*/\nfunction () {\n  function Draw(context) {\n    _classCallCheck(this, Draw);\n\n    this.context = context;\n    this.context.lineWidth = 2;\n    this.countFrown = 0;\n    this.countGrin = 0;\n    this.mouth = new Image();\n    this.mouth.src = _assets_images_mouth_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    this.step = 0.2; // moving step\n\n    this.x1 = IRIS_X1 + IRIS_RADIUS;\n    this.x2 = IRIS_X2 + IRIS_RADIUS;\n  }\n\n  _createClass(Draw, [{\n    key: \"line\",\n    value: function line(moveToX, moveToY, lineToX, lineToY) {\n      this.context.beginPath();\n      this.context.moveTo(moveToX, moveToY);\n      this.context.lineTo(lineToX, lineToY);\n      this.context.stroke();\n    }\n  }, {\n    key: \"circle\",\n    value: function circle(x, y, radius, fillStyle) {\n      this.context.beginPath();\n      this.context.arc(x, y, radius, 0, 2 * Math.PI);\n      this.context.fillStyle = fillStyle;\n      this.context.fill();\n    }\n  }, {\n    key: \"head\",\n    value: function head() {\n      this.context.drawImage(headImage, 0, 0, 128, 128, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x - 20, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y - 20, 128, 128);\n    }\n  }, {\n    key: \"basket\",\n    value: function basket() {\n      this.context.drawImage(basketImage, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y);\n    }\n  }, {\n    key: \"grin\",\n    value: function grin() {\n      if (this.countGrin) {\n        this.countFrown = 0; // Prevent frowning from apprearing at the same time\n        // Left eyebrow\n\n        this.line(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 23, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 13, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 40, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 10); // Right eyebrow\n\n        this.line(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 67, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 13, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 50, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 10); // Mouth\n\n        this.context.drawImage(this.mouth, 0, 0, 37, 24, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 27, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 39, 37, 24); // Make eyebrows stay longer\n\n        this.countGrin += 1;\n        if (this.countGrin > 50) this.countGrin = 0;\n      }\n    }\n  }, {\n    key: \"frown\",\n    value: function frown() {\n      if (this.countFrown) {\n        this.countGrin = 0; // Prevent grinning from apprearing at the same time\n        // Left eyebrow\n\n        this.line(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 33, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 10, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 43, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 20); // Right eyebrow\n\n        this.line(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 58, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 10, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + 48, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + 20); // Eye motion\n        // Draw the iris paths\n\n        this.context.clearRect(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + IRIS_X1, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + IRIS_Y, PATH_L, PATH_W);\n        this.context.clearRect(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + IRIS_X2, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + IRIS_Y, PATH_L, PATH_W);\n        this.context.fillStyle = \"white\";\n        this.context.fillRect(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + IRIS_X1, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + IRIS_Y, PATH_L, PATH_W);\n        this.context.fillRect(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + IRIS_X2, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + IRIS_Y, PATH_L, PATH_W); // Draw the left and right irises\n\n        this.circle(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + this.x1, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + IRIS_Y + IRIS_RADIUS, IRIS_RADIUS, \"black\");\n        this.circle(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x + this.x2, _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y + IRIS_Y + IRIS_RADIUS, IRIS_RADIUS, \"black\");\n        this.x1 += this.step;\n        this.x2 += this.step;\n\n        if (this.x1 > IRIS_X1 + PATH_L - IRIS_RADIUS || this.x1 < IRIS_X1 + IRIS_RADIUS) {\n          this.step = -this.step;\n        }\n\n        this.countFrown += 1;\n\n        if (this.countFrown > 2 * (PATH_L - 2 * IRIS_RADIUS) / this.step) {\n          this.x1 = IRIS_X1 + IRIS_RADIUS;\n          this.x2 = IRIS_X2 + IRIS_RADIUS;\n          this.step = 0.2;\n          this.countFrown = 0;\n        }\n      }\n    }\n  }, {\n    key: \"score\",\n    value: function score(_score) {\n      this.context.font = \"20px Georgia\";\n      this.context.fillStyle = \"blue\";\n      this.context.fillText(\"Score: \" + _score, 10, 300);\n    }\n  }, {\n    key: \"timer\",\n    value: function timer(timeLeft) {\n      var minLeft = Math.floor(timeLeft / 1000 / 60);\n      var secLeft = Math.floor(timeLeft / 1000 % 60);\n      this.context.font = \"20px Georgia\";\n      this.context.fillStyle = \"red\";\n      this.context.fillText(\"Time Left: \" + minLeft + \"m \" + secLeft + \"s\", 100, 300);\n    }\n  }, {\n    key: \"orangesInBasket\",\n    value: function orangesInBasket(countCatch) {\n      // Draw oranges in basket.\n      var catchedX = _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 8; // Display 4 oranges at most, hence the radius is basket.width/8\n\n      if (countCatch < 5 && countCatch > 0) {\n        // If less than five, oranges will pile on.\n        for (var i = 0; i < countCatch; i++) {\n          // Draw the orange body\n          this.circle(catchedX, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 8, \"#FF6600\"); // Draw the stub\n\n          this.circle(catchedX, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y - 11, 2, \"#006600\");\n          catchedX += _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 4;\n        }\n      }\n\n      if (countCatch >= 5) {\n        // If more than five, no more oranges will show up.\n        for (var i = 0; i < 4; i++) {\n          // Draw the orange body\n          this.circle(catchedX, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 8, \"#FF6600\"); // Draw the stub\n\n          this.circle(catchedX, _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y - 11, 2, \"#006600\");\n          catchedX += _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 4;\n        }\n      }\n    }\n  }]);\n\n  return Draw;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Draw.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ \"./src/Media.js\");\n\n\nvar CANVAS_WIDTH = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_WIDTH,\n    CANVAS_HEIGHT = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_HEIGHT,\n    INTERVAL = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INTERVAL;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  canvas: document.createElement(\"canvas\"),\n  getContext: function getContext() {\n    this.canvas.width = CANVAS_WIDTH;\n    this.canvas.height = CANVAS_HEIGHT;\n    this.canvas.style.backgroundImage = \"url(\".concat(_Media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].background, \")\");\n    this.context = this.canvas.getContext(\"2d\");\n    return this.context;\n  },\n  start: function start(run, frame) {\n    frame.appendChild(this.canvas);\n    this.interval = setInterval(run, INTERVAL);\n  },\n  resume: function resume(run) {\n    this.interval = setInterval(run, INTERVAL);\n  },\n  stop: function stop() {\n    clearInterval(this.interval);\n  },\n  clear: function clear() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n});\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Head.js":
/*!*********************!*\
  !*** ./src/Head.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n\nvar HEAD_WIDTH = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEAD_WIDTH,\n    HEAD_HEIGHT = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEAD_HEIGHT,\n    RIGHT_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RIGHT_BOUND,\n    LOWER_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOWER_BOUND,\n    SPEED = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SPEED; // head object, defining the initial position\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  x: RIGHT_BOUND - HEAD_WIDTH,\n  y: LOWER_BOUND,\n  width: HEAD_WIDTH,\n  height: HEAD_HEIGHT,\n  speed: SPEED,\n  reset: function reset() {\n    // back to the initial position when game is restarted\n    this.x = RIGHT_BOUND - HEAD_WIDTH;\n    this.y = LOWER_BOUND;\n    this.width = HEAD_WIDTH;\n    this.height = HEAD_HEIGHT;\n    this.speed = SPEED;\n  }\n});\n\n//# sourceURL=webpack:///./src/Head.js?");

/***/ }),

/***/ "./src/Media.js":
/*!**********************!*\
  !*** ./src/Media.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_tree_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/tree.jpg */ \"./assets/images/tree.jpg\");\n/* harmony import */ var _assets_images_basket_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/basket.png */ \"./assets/images/basket.png\");\n/* harmony import */ var _assets_images_eric_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/eric.png */ \"./assets/images/eric.png\");\n/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sound */ \"./src/Sound.js\");\n/* harmony import */ var _assets_audios_bg_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/audios/bg.mp3 */ \"./assets/audios/bg.mp3\");\n/* harmony import */ var _assets_audios_outro_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/audios/outro.mp3 */ \"./assets/audios/outro.mp3\");\n/* harmony import */ var _assets_audios_ouch_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/audios/ouch.mp3 */ \"./assets/audios/ouch.mp3\");\n/* harmony import */ var _assets_audios_uhoh_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/audios/uhoh.mp3 */ \"./assets/audios/uhoh.mp3\");\n/* harmony import */ var _assets_audios_yay_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/audios/yay.mp3 */ \"./assets/audios/yay.mp3\");\n\n\n\n\n\n\n\n\n\nvar headImage = new Image();\nvar basketImage = new Image();\nheadImage.src = _assets_images_eric_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nbasketImage.src = _assets_images_basket_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar soundBg = new _Sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_assets_audios_bg_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"], true); // background music\n\nvar soundOutro = new _Sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_assets_audios_outro_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"], false); // outro sound\n\nvar soundOuch = new _Sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_assets_audios_ouch_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"], false); // pain sound\n\nvar soundUhoh = new _Sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_assets_audios_uhoh_mp3__WEBPACK_IMPORTED_MODULE_7__[\"default\"], false); // another pain sound\n\nvar soundYay = new _Sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_assets_audios_yay_mp3__WEBPACK_IMPORTED_MODULE_8__[\"default\"], false); // happy sound\n\nvar sounds = [soundBg, soundOutro, soundOuch, soundUhoh, soundYay];\n\nvar adjustVolume = function adjustVolume() {\n  return sounds.forEach(function (sound) {\n    return sound.volume();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  background: _assets_images_tree_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  headImage: headImage,\n  basketImage: basketImage,\n  soundBg: soundBg,\n  soundOutro: soundOutro,\n  soundOuch: soundOuch,\n  soundUhoh: soundUhoh,\n  soundYay: soundYay,\n  adjustVolume: adjustVolume\n});\n\n//# sourceURL=webpack:///./src/Media.js?");

/***/ }),

/***/ "./src/Move.js":
/*!*********************!*\
  !*** ./src/Move.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Head */ \"./src/Head.js\");\n/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Basket */ \"./src/Basket.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n\n\n\nvar HEAD_WIDTH = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].HEAD_WIDTH,\n    BASKET_WIDTH = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BASKET_WIDTH,\n    dY = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dY,\n    UPPER_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].UPPER_BOUND,\n    LOWER_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].LOWER_BOUND,\n    LEFT_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].LEFT_BOUND,\n    RIGHT_BOUND = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RIGHT_BOUND; // Listen to key events\n\nvar keysDown = {};\nwindow.addEventListener('keydown', function (e) {\n  keysDown[e.keyCode] = true;\n});\nwindow.addEventListener('keyup', function (e) {\n  delete keysDown[e.keyCode];\n}); // Key control\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (mod) {\n  if (37 in keysDown) {\n    // Left Arrow\n    if (_Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x > LEFT_BOUND) {\n      // Not moved to the bound yet\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x -= _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].speed * mod;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x -= _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].speed * mod;\n    } else {\n      // When hitting the bound\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x = LEFT_BOUND;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x = LEFT_BOUND + BASKET_WIDTH;\n    }\n  }\n\n  if (38 in keysDown) {\n    // Up Arrow\n    if (_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y > UPPER_BOUND) {\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y -= _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].speed * mod;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y -= _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].speed * mod;\n    } else {\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y = UPPER_BOUND + dY;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y = UPPER_BOUND;\n    }\n  }\n\n  if (39 in keysDown) {\n    // Right Arrow\n    if (_Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x < RIGHT_BOUND) {\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x += _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].speed * mod;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x += _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].speed * mod;\n    } else {\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x = RIGHT_BOUND;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x = RIGHT_BOUND - HEAD_WIDTH;\n    }\n  }\n\n  if (40 in keysDown) {\n    // Down Arrow\n    if (_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y < LOWER_BOUND) {\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y += _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].speed * mod;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y += _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].speed * mod;\n    } else {\n      _Basket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y = LOWER_BOUND + dY;\n      _Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y = LOWER_BOUND;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/Move.js?");

/***/ }),

/***/ "./src/Orange.js":
/*!***********************!*\
  !*** ./src/Orange.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Orange; });\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ \"./src/Draw.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CANVAS_HEIGHT = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CANVAS_HEIGHT,\n    INTERVAL = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].INTERVAL,\n    GROW_TIME = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GROW_TIME,\n    RIPE_TIME = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RIPE_TIME,\n    HANG_TIME = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HANG_TIME,\n    FALL_TIME = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].FALL_TIME,\n    BORN_RADIUS = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BORN_RADIUS,\n    RIPE_RADIUS = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RIPE_RADIUS,\n    STUB_RADIUS = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STUB_RADIUS,\n    STUB_OFFSET = _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STUB_OFFSET; // create the orange class\n\nvar Orange =\n/*#__PURE__*/\nfunction () {\n  function Orange(context, x, y) {\n    _classCallCheck(this, Orange);\n\n    this.context = context;\n    this.x = x; // the center x\n\n    this.y = y; // the center y\n\n    this.bornY = y;\n    this.g = 0; // used to control the speed of orange color shifting\n\n    this.tick = 0; // used to indicate different phases of an orange\n\n    this.radius = 6; // orange radius, in px;\n\n    this.draw = new _Draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n  }\n\n  _createClass(Orange, [{\n    key: \"update\",\n    value: function update() {\n      // update the moving phase of an orange\n      if (this.tick < GROW_TIME * 1000 / INTERVAL) {\n        // growing phase\n        this.draw.circle(this.x, this.y, this.radius, \"green\");\n        this.tick += 1;\n        this.radius += (RIPE_RADIUS - BORN_RADIUS) / (GROW_TIME * 1000 / INTERVAL);\n      } // riping phase\n      else if (this.tick >= GROW_TIME * 1000 / INTERVAL && this.tick < (GROW_TIME + RIPE_TIME) * 1000 / INTERVAL) {\n          var colorEvolve = \"rgb(\" + Math.floor(34 * this.g) + \", \" + (128 - Math.floor(this.g)) + \", 0)\"; // gradually shift the color\n\n          this.draw.circle(this.x, this.y, RIPE_RADIUS, colorEvolve);\n          this.g += 0.03; // control the speed of color shifting\n\n          this.tick += 1;\n        } // hanging phase\n        else if (this.tick >= (GROW_TIME + RIPE_TIME) * 1000 / INTERVAL && this.tick < (GROW_TIME + RIPE_TIME + HANG_TIME) * 1000 / INTERVAL) {\n            // create a 3D effect by radial gradient\n            this.draw.circle(this.x, this.y, RIPE_RADIUS, this.ripeOrangeGradient(this.y));\n            this.tick += 1;\n          } // falling phase\n          else if (this.tick >= (GROW_TIME + RIPE_TIME + HANG_TIME) * 1000 / INTERVAL && this.tick < (GROW_TIME + RIPE_TIME + HANG_TIME + FALL_TIME) * 1000 / INTERVAL) {\n              this.draw.circle(this.x, this.y, RIPE_RADIUS, this.ripeOrangeGradient(this.y)); // Draw the stub\n\n              this.draw.circle(this.x, this.y - STUB_OFFSET, STUB_RADIUS, \"#006600\");\n              this.y += (CANVAS_HEIGHT - RIPE_RADIUS - this.bornY) / (FALL_TIME * 1000 / INTERVAL); // calculate the update step by dividing the distance btw the born and final postions w/ falltime\n\n              this.tick += 1;\n            } // on-ground phase\n            else {\n                this.draw.circle(this.x, this.y, RIPE_RADIUS, this.ripeOrangeGradient(this.y)); // Draw the stub\n\n                this.draw.circle(this.x, this.y - STUB_OFFSET, STUB_RADIUS, \"#006600\");\n              }\n    }\n  }, {\n    key: \"ripeOrangeGradient\",\n    value: function ripeOrangeGradient(positionY) {\n      var gradient = this.context.createRadialGradient(this.x, positionY, 0, this.x, positionY, RIPE_RADIUS);\n      gradient.addColorStop(0, \"#FF7510\");\n      gradient.addColorStop(1, \"#E65C00\");\n      return gradient;\n    }\n  }]);\n\n  return Orange;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Orange.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Head */ \"./src/Head.js\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ \"./src/Draw.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Media */ \"./src/Media.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar INTERVAL = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INTERVAL,\n    RIPE_RADIUS = _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RIPE_RADIUS;\nvar soundYay = _Media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].soundYay,\n    soundOuch = _Media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].soundOuch,\n    soundUhoh = _Media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].soundUhoh;\n\nvar Score =\n/*#__PURE__*/\nfunction () {\n  function Score(context, oranges) {\n    _classCallCheck(this, Score);\n\n    this.draw = new _Draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context);\n    this.oranges = oranges;\n    this.score = 0;\n    this.countCatch = 0;\n    this.countHit = 0;\n    this.timeLeft = 7 * 60 * 1000; // time limit: 7 min\n  } // collision checking\n\n\n  _createClass(Score, [{\n    key: \"intersect\",\n    value: function intersect(x, y, w, h, xi, yi, wi, hi) {\n      // parameters are the sets of coordinates and sizes of two square objects\n      // hitting happens if the centers come less than half of the widths and heights of the two objects\n      if (Math.abs(x + w / 2 - (xi + wi / 2)) < (w + wi) / 2 && Math.abs(y + h / 2 - (yi + hi / 2)) < (h + hi) / 2) return true; // if collided, return true\n      else return false;\n    } // check Eric catched a orange\n\n  }, {\n    key: \"checkCatch\",\n    value: function checkCatch(x, y, w, h) {\n      for (var i = 0; i < this.oranges.length; i++) {\n        var xi = this.oranges[i].x - RIPE_RADIUS;\n        var yi = this.oranges[i].y - RIPE_RADIUS;\n        var wi = 2 * RIPE_RADIUS;\n        var hi = 2 * RIPE_RADIUS; // check collision\n\n        if (this.intersect(x, y, w, h, xi, yi, wi, hi)) {\n          soundYay.play();\n          this.countCatch += 1;\n          this.score += 1;\n          this.oranges.splice(i, 1); // if collided, remove the orange\n\n          this.draw.countGrin = 1;\n        }\n      }\n\n      this.draw.grin(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // keep grinning\n    } // check Eric is hit on the head by an orange\n\n  }, {\n    key: \"checkHit\",\n    value: function checkHit(x, y, w, h) {\n      for (var i = 0; i < this.oranges.length; i++) {\n        var xi = this.oranges[i].x - RIPE_RADIUS;\n        var yi = this.oranges[i].y - RIPE_RADIUS;\n        var wi = 2 * RIPE_RADIUS;\n        var hi = 2 * RIPE_RADIUS; // check collision\n\n        if (this.intersect(x, y, w, h, xi, yi, wi, hi)) {\n          if (this.countHit % 2 == 0) {\n            // to alternatively play pain sounds\n            soundOuch.play();\n          } else {\n            // to alternatively play pain sounds\n            soundUhoh.play();\n          }\n\n          this.score -= 1; // if hit, one mark is deducted\n\n          this.countHit += 1;\n          this.oranges.splice(i, 1); // if collided, remove the orange\n\n          this.draw.countFrown = 1;\n        }\n      }\n\n      this.draw.frown(_Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // keep frowning\n    } // score updating\n\n  }, {\n    key: \"display\",\n    value: function display() {\n      this.draw.score(this.score);\n    } // countdown\n\n  }, {\n    key: \"countDown\",\n    value: function countDown() {\n      this.draw.timer(this.timeLeft);\n      this.timeLeft -= INTERVAL;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.score = 0;\n      this.countCatch = 0;\n      this.countHit = 0;\n      this.timeLeft = 7 * 60 * 1000;\n    }\n  }]);\n\n  return Score;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Score.js?");

/***/ }),

/***/ "./src/Sound.js":
/*!**********************!*\
  !*** ./src/Sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sound; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Define the sound class\nvar Sound =\n/*#__PURE__*/\nfunction () {\n  function Sound(src, isLooped) {\n    _classCallCheck(this, Sound);\n\n    this.sound = document.createElement(\"audio\");\n    this.sound.src = src;\n    this.sound.setAttribute(\"preload\", \"auto\");\n    this.sound.setAttribute(\"controls\", \"none\");\n    this.sound.style.display = \"none\";\n\n    if (isLooped) {\n      this.sound.loop = true;\n    }\n\n    document.body.appendChild(this.sound);\n  }\n\n  _createClass(Sound, [{\n    key: \"play\",\n    value: function play() {\n      this.sound.volume = document.getElementById(\"volume\").value / 100; // control volume\n\n      this.sound.play();\n    }\n  }, {\n    key: \"volume\",\n    value: function volume() {\n      this.sound.volume = document.getElementById(\"volume\").value / 100; // control volume\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.sound.pause();\n    }\n  }]);\n\n  return Sound;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Sound.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/favicon.ico */ \"./assets/images/favicon.ico\");\n/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ \"./src/Media.js\");\n/* harmony import */ var _assets_images_cover_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/cover.jpg */ \"./assets/images/cover.jpg\");\n/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Control */ \"./src/Control.js\");\n\n\n\n\n\nvar divBackground = document.createElement(\"div\");\nvar divContainer = document.createElement(\"div\");\nvar header = document.createElement(\"h1\");\nvar divCanvas = document.createElement(\"div\");\nvar imgCover = document.createElement(\"img\");\nvar divControl = document.createElement(\"div\");\nvar divButton = document.createElement(\"div\");\nvar btnStart = document.createElement(\"button\");\nvar btnPause = document.createElement(\"button\");\nvar divSound = document.createElement(\"div\");\nvar spnLeft = document.createElement(\"span\");\nvar volume = document.createElement(\"input\");\nvar spnRight = document.createElement(\"span\");\nvar divHowTo = document.createElement(\"div\");\nimgCover.src = _assets_images_cover_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nbtnPause.style.display = \"none\";\ndivBackground.id = \"divBackground\";\ndivContainer.id = \"divContainer\";\ndivCanvas.id = \"divCanvas\";\ndivControl.id = \"divControl\";\ndivHowTo.id = \"divHowTo\";\ndivSound.id = \"divSound\";\nheader.innerText = \"Eric the Orange Boy\";\nbtnStart.innerText = \"Start Game\";\nbtnPause.innerText = \"Pause Game\";\nspnLeft.innerText = \"Sound: Min\";\nspnRight.innerText = \"Max\";\ndivHowTo.innerText = \"--- Use Arrow keys to move Eric ---\";\nvolume.id = \"volume\";\nvolume.type = \"range\";\nvolume.min = \"0\";\nvolume.max = \"100\";\nbtnStart.addEventListener(\"click\", function () {\n  return Object(_Control__WEBPACK_IMPORTED_MODULE_4__[\"start\"])(divCanvas, btnStart, btnPause);\n});\nbtnPause.addEventListener(\"click\", function () {\n  return Object(_Control__WEBPACK_IMPORTED_MODULE_4__[\"pause\"])(btnPause);\n});\nvolume.addEventListener(\"change\", _Media__WEBPACK_IMPORTED_MODULE_2__[\"default\"].adjustVolume);\ndivCanvas.appendChild(imgCover);\ndivButton.appendChild(btnStart);\ndivButton.appendChild(btnPause);\ndivSound.appendChild(spnLeft);\ndivSound.appendChild(volume);\ndivSound.appendChild(spnRight);\ndivControl.appendChild(divButton);\ndivControl.appendChild(divSound);\ndivContainer.appendChild(header);\ndivContainer.appendChild(divCanvas);\ndivContainer.appendChild(divHowTo);\ndivContainer.appendChild(divControl);\ndocument.body.appendChild(divContainer);\ndocument.body.appendChild(divBackground);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });