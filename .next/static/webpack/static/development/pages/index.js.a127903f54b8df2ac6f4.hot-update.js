webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/main.scss */ "./components/main.scss");
/* harmony import */ var _components_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_main_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "D:\\react\\er_monitor\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _Component);

  function index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      date: new Date()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (date) {
      return _this.setState({
        date: date
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      var font = _config__WEBPACK_IMPORTED_MODULE_8__["default"].font;
      return __jsx("div", {
        style: {
          fontFamily: font,
          fontSize: 39,
          marginRight: 15,
          marginTop: -2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(react_animated_css__WEBPACK_IMPORTED_MODULE_10__["Animated"], {
        animationIn: "bounceInLeft",
        animationOut: "fadeOut",
        isVisible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "hello world ;)")), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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
          lineNumber: 31
        },
        __self: this
      }, __jsx("h1", {
        style: {
          marginTop: 25
        },
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-address-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), " \u0E23\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E04\u0E25\u0E34\u0E19\u0E34\u0E01 \u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D"), __jsx("div", {
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
      }, __jsx("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "#"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02"), __jsx("th", {
        style: {
          textAlign: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13")), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("tr", {
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
      }, "1."), __jsx("td", {
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
      }, "A0001")), __jsx("td", {
        style: {
          textAlign: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u0E2A\u0E38\u0E20\u0E32\u0E20\u0E23 \u0E04\u0E23\u0E37\u0E49\u0E19\u0E08\u0E34\u0E15"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "--:--")))))))), __jsx("div", {
        className: "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
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
          lineNumber: 62
        },
        __self: this
      }, __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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
          lineNumber: 67
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
          lineNumber: 68
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
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "MagicScroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("table", {
        className: "table striped inside text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("tbody", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("td", {
        style: {
          height: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "A0004")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("td", {
        style: {
          fontSize: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
          lineNumber: 90
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
          lineNumber: 91
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
          lineNumber: 93
        },
        __self: this
      }, __jsx("div", {
        className: "MagicScroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("table", {
        className: "table striped inside text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("tbody", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("td", {
        style: {
          height: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "A0002")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("td", {
        style: {
          fontSize: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
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
          lineNumber: 109
        },
        __self: this
      }, __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
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
          lineNumber: 114
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
          lineNumber: 115
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
          lineNumber: 117
        },
        __self: this
      }, __jsx("div", {
        className: "MagicScroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("table", {
        className: "table striped inside text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("tbody", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("td", {
        style: {
          height: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "A0003")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("td", {
        style: {
          fontSize: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "\u0E27\u0E0A\u0E34\u0E23\u0E27\u0E34\u0E17\u0E22\u0E4C \u0E41\u0E2A\u0E19\u0E1E\u0E23\u0E30\u0E27\u0E31\u0E07")))))))), __jsx("div", {
        className: "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
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
          lineNumber: 138
        },
        __self: this
      }, __jsx("h1", {
        style: {
          marginTop: 25
        },
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("i", {
        "class": "fas fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
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
          lineNumber: 143
        },
        __self: this
      }, __jsx("div", {
        className: "MagicScroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("table", {
        className: "table striped table-hover inside text-center upup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "\u0E42\u0E15\u0E4A\u0E30")), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "A0001")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "A0002")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "A0003")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "A0004")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "A0005")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "A0006")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "A0007")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "A0008")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "A0009")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "--:--")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("span", {
        className: "badge badge-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "A00010")), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "--:--"))))))))), __jsx("div", {
        className: "downbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx("marquee", {
        scrollamount: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22\u0E23\u0E27\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E0A\u0E32\u0E15\u0E34\u0E40\u0E0A\u0E37\u0E49\u0E2D\u0E44\u0E17\u0E22 \u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E23\u0E31\u0E10\u0E44\u0E1C\u0E17\u0E02\u0E2D\u0E07\u0E44\u0E17\u0E22\u0E17\u0E38\u0E01\u0E2A\u0E48\u0E27\u0E19 \u0E2D\u0E22\u0E39\u0E48\u0E14\u0E33\u0E23\u0E07\u0E04\u0E07\u0E44\u0E27\u0E49\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E21\u0E27\u0E25 \u0E14\u0E49\u0E27\u0E22\u0E44\u0E17\u0E22\u0E25\u0E49\u0E27\u0E19\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E31\u0E01\u0E2A\u0E32\u0E21\u0E31\u0E04\u0E04\u0E35 \u0E44\u0E17\u0E22\u0E19\u0E35\u0E49\u0E23\u0E31\u0E01\u0E2A\u0E07\u0E1A\u0E41\u0E15\u0E48\u0E16\u0E36\u0E07\u0E23\u0E1A\u0E44\u0E21\u0E48\u0E02\u0E25\u0E32\u0E14 \u0E40\u0E2D\u0E01\u0E23\u0E32\u0E0A\u0E08\u0E30\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E43\u0E04\u0E23\u0E02\u0E48\u0E21\u0E02\u0E35\u0E48 \u0E2A\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E17\u0E38\u0E01\u0E2B\u0E22\u0E32\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E32\u0E15\u0E34\u0E1E\u0E25\u0E35 \u0E40\u0E16\u0E25\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E0A\u0E32\u0E15\u0E34\u0E44\u0E17\u0E22\u0E17\u0E27\u0E35\u0E21\u0E35\u0E0A\u0E31\u0E22 \u0E0A\u0E42\u0E22")));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.a127903f54b8df2ac6f4.hot-update.js.map