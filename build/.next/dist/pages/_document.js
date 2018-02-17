"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next\\dist\\server\\document.js");

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Project\\GitHub\\Imagine-Engine-Project\\client\\pages\\_document.js?entry";


var MyDocument = function (_Document) {
	(0, _inherits3.default)(MyDocument, _Document);

	function MyDocument() {
		(0, _classCallCheck3.default)(this, MyDocument);

		return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
	}

	(0, _createClass3.default)(MyDocument, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("html", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, _react2.default.createElement(_document.Head, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement("meta", {
				name: "viewport",
				content: "initial-scale=1.0, width=device-width",
				key: "viewport",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}), _react2.default.createElement("meta", {
				name: "keywords",
				content: "find lawyer, findLawyer, \u0E2B\u0E32\u0E17\u0E19\u0E32\u0E22, lawyer, lawyers",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}), _react2.default.createElement("meta", { name: "author", content: "Chanon Panpila", __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}), _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}), this.props.styleTags), _react2.default.createElement("body", { style: { margin: 0, padding: 0, backgroundColor: "#f4f4f4" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_document.Main, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}), _react2.default.createElement(_document.NextScript, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			})), _react2.default.createElement("script", { src: "https://smartlock.google.com/client", __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}));
		}
	}], [{
		key: "getInitialProps",
		value: function getInitialProps(_ref) {
			var renderPage = _ref.renderPage;

			var sheet = new _styledComponents.ServerStyleSheet();
			var page = renderPage(function (App) {
				return function (props) {
					return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 8
						}
					})));
				};
			});
			var styleTags = sheet.getStyleElement();
			return (0, _extends3.default)({}, page, {
				styleTags: styleTags
			});
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;