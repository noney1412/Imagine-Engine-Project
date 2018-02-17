"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise;
_mongoose2.default.set("debug", process.env.DEBUG);
_mongoose2.default.connect(process.env.MONGO_URL, {
	useMongoClient: true
});

exports.default = _mongoose2.default;