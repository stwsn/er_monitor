module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/main.scss":
/*!******************************!*\
  !*** ./components/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
  font: 'Kanit',
  test: ''
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main.scss */ "./components/main.scss");
/* harmony import */ var _components_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_main_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\react\\er_monitor\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      date: new Date()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", date => this.setState({
      date
    }));
  }

  render() {
    const font = _config__WEBPACK_IMPORTED_MODULE_2__["default"].font;
    return __jsx("div", {
      style: {
        fontFamily: font,
        fontSize: 39,
        marginRight: 15,
        marginTop: -2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3",
      style: {
        marginTop: 10,
        marginLeft: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("h1", {
      style: {
        marginTop: 25
      },
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-address-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), " \u0E23\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E04\u0E25\u0E34\u0E19\u0E34\u0E01 \u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D"), __jsx("table", {
      className: "table striped table-hover inside text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "#"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02"), __jsx("th", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13"))), __jsx("div", {
      className: "table p-0 box",
      style: {
        width: '100%',
        height: 905
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "MagicScroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("table", {
      className: "table striped table-hover inside text-center upup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "1."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "A0001")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\u0E2A\u0E38\u0E20\u0E32\u0E20\u0E23 \u0E04\u0E23\u0E37\u0E49\u0E19\u0E08\u0E34\u0E15"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "2."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "A0002")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "\u0E18\u0E31\u0E0D\u0E0D\u0E23\u0E31\u0E0A\u0E15\u0E4C \u0E2A\u0E32\u0E23\u0E30\u0E0A\u0E32\u0E15\u0E34"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "3."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "A0003")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\u0E27\u0E0A\u0E34\u0E23\u0E27\u0E34\u0E17\u0E22\u0E4C \u0E41\u0E2A\u0E19\u0E1E\u0E23\u0E30\u0E27\u0E31\u0E07"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "4."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "A0004")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\u0E41\u0E1E\u0E23\u0E1E\u0E25\u0E2D\u0E22 \u0E2A\u0E34\u0E07\u0E2B\u0E4C\u0E17\u0E2D\u0E07\u0E0A\u0E31\u0E22"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "5."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "A0005")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "\u0E40\u0E2A\u0E01\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E43\u0E08"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "6."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "A0006")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "\u0E2D\u0E31\u0E08\u0E08\u0E19\u0E32 \u0E2E\u0E27\u0E14\u0E2B\u0E34\u0E19"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "7."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "A0007")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "\u0E40\u0E01\u0E28\u0E23\u0E32\u0E20\u0E23\u0E13\u0E4C \u0E28\u0E23\u0E35\u0E2A\u0E33\u0E23\u0E32\u0E0D"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "8."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "A0008")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "\u0E19\u0E10\u0E29\u0E23 \u0E2A\u0E38\u0E21\u0E19\u0E19\u0E2D\u0E01"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "9."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "A0009")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "\u0E01\u0E23\u0E0A\u0E19\u0E01 \u0E1C\u0E08\u0E07\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E34\u0E4C"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "10."), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "A00010")), __jsx("td", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "\u0E01\u0E24\u0E15\u0E27\u0E31\u0E12\u0E19\u0E4C \u0E2A\u0E38\u0E27\u0E32\u0E19\u0E34\u0E0A\u0E22\u0E4C"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "--:--")))))))), __jsx("div", {
      className: "col-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3",
      style: {
        marginTop: 10,
        marginLeft: -15,
        backgroundColor: '#0764b4',
        fontSize: 80
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("span", {
      style: {
        marginLeft: 60,
        fontSize: 60,
        fontWeight: 'bold'
      },
      className: "pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "\u0E42\u0E15\u0E4A\u0E30 1"), __jsx("span", {
      style: {
        marginRight: 20,
        fontSize: 60,
        backgroundColor: '#53abf9'
      },
      className: "pull-right boxt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "-")), __jsx("div", {
      className: "table p-0 box",
      style: {
        width: '100%',
        height: 217
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      className: "MagicScroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("table", {
      className: "table striped inside text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("tbody", {
      style: {
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("td", {
      style: {
        height: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "A0004")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("td", {
      style: {
        fontSize: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "\u0E2A\u0E38\u0E20\u0E32\u0E20\u0E23 \u0E04\u0E23\u0E37\u0E49\u0E19\u0E08\u0E34\u0E15"))))))), __jsx("div", {
      className: "card mb-3",
      style: {
        marginLeft: -15,
        backgroundColor: '#ff3300',
        fontSize: 80
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("span", {
      style: {
        marginLeft: 60,
        fontSize: 60,
        fontWeight: 'bold'
      },
      className: "pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "\u0E42\u0E15\u0E4A\u0E30 2"), __jsx("span", {
      style: {
        marginRight: 20,
        fontSize: 60,
        backgroundColor: '#ff704d'
      },
      className: "pull-right boxt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "-")), __jsx("div", {
      className: "table p-0 box",
      style: {
        width: '100%',
        height: 217
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("div", {
      className: "MagicScroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("table", {
      className: "table striped inside text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("tbody", {
      style: {
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("td", {
      style: {
        height: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "A0002")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("td", {
      style: {
        fontSize: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "\u0E18\u0E31\u0E0D\u0E0D\u0E23\u0E31\u0E0A\u0E15\u0E4C \u0E2A\u0E32\u0E23\u0E30\u0E0A\u0E32\u0E15\u0E34"))))))), __jsx("div", {
      className: "card mb-3",
      style: {
        marginLeft: -15,
        backgroundColor: '#0D15CB',
        fontSize: 80
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("span", {
      style: {
        marginLeft: 60,
        fontSize: 60,
        fontWeight: 'bold'
      },
      className: "pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "\u0E42\u0E15\u0E4A\u0E30 3"), __jsx("span", {
      style: {
        marginRight: 20,
        fontSize: 60,
        backgroundColor: '#4d4dff'
      },
      className: "pull-right boxt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "125")), __jsx("div", {
      className: "table p-0 box",
      style: {
        width: '100%',
        height: 220
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("div", {
      className: "MagicScroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("table", {
      className: "table striped inside text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("tbody", {
      style: {
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("td", {
      style: {
        height: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "A0003")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("td", {
      style: {
        fontSize: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "\u0E27\u0E0A\u0E34\u0E23\u0E27\u0E34\u0E17\u0E22\u0E4C \u0E41\u0E2A\u0E19\u0E1E\u0E23\u0E30\u0E27\u0E31\u0E07")))))))), __jsx("div", {
      className: "col-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3",
      style: {
        marginTop: 10,
        marginLeft: -15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("h1", {
      style: {
        marginTop: 25
      },
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("i", {
      class: "fas fa-bell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), " \u0E40\u0E23\u0E35\u0E22\u0E01\u0E41\u0E25\u0E49\u0E27"), __jsx("div", {
      className: "table p-0 box",
      style: {
        width: '100%',
        height: 905
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("table", {
      className: "table striped table-hover inside text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "\u0E42\u0E15\u0E4A\u0E30"))), __jsx("div", {
      className: "MagicScroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("table", {
      className: "table striped table-hover inside text-center upup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "A0001")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "A0002")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "A0003")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "A0004")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "A0005")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "A0006")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, "A0007")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "A0008")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "A0009")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "--:--")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, __jsx("span", {
      className: "badge badge-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, "A00010")), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "--:--"))))))))), __jsx("div", {
      className: "downbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, __jsx("marquee", {
      scrollamount: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22\u0E23\u0E27\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E0A\u0E32\u0E15\u0E34\u0E40\u0E0A\u0E37\u0E49\u0E2D\u0E44\u0E17\u0E22 \u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E23\u0E31\u0E10\u0E44\u0E1C\u0E17\u0E02\u0E2D\u0E07\u0E44\u0E17\u0E22\u0E17\u0E38\u0E01\u0E2A\u0E48\u0E27\u0E19 \u0E2D\u0E22\u0E39\u0E48\u0E14\u0E33\u0E23\u0E07\u0E04\u0E07\u0E44\u0E27\u0E49\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E21\u0E27\u0E25 \u0E14\u0E49\u0E27\u0E22\u0E44\u0E17\u0E22\u0E25\u0E49\u0E27\u0E19\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E31\u0E01\u0E2A\u0E32\u0E21\u0E31\u0E04\u0E04\u0E35 \u0E44\u0E17\u0E22\u0E19\u0E35\u0E49\u0E23\u0E31\u0E01\u0E2A\u0E07\u0E1A\u0E41\u0E15\u0E48\u0E16\u0E36\u0E07\u0E23\u0E1A\u0E44\u0E21\u0E48\u0E02\u0E25\u0E32\u0E14 \u0E40\u0E2D\u0E01\u0E23\u0E32\u0E0A\u0E08\u0E30\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E43\u0E04\u0E23\u0E02\u0E48\u0E21\u0E02\u0E35\u0E48 \u0E2A\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E17\u0E38\u0E01\u0E2B\u0E22\u0E32\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E32\u0E15\u0E34\u0E1E\u0E25\u0E35 \u0E40\u0E16\u0E25\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E0A\u0E32\u0E15\u0E34\u0E44\u0E17\u0E22\u0E17\u0E27\u0E35\u0E21\u0E35\u0E0A\u0E31\u0E22 \u0E0A\u0E42\u0E22")));
  }

}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\react\er_monitor\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map