"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("../mongoose.config");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Schema } = _mongoose2.default;

exports.default = _mongoose2.default.model("User", Schema({
	provider: {
		type: String,
		required: true
	},
	_id: {
		type: String,
		index: true,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	displayName: { type: String, default: "" },
	profile_image: {
		type: String,
		default: ""
	},
	name: {
		firtname: { type: String, default: "" },
		lastname: { type: String, default: "" }
	},
	emails: [{
		value: String,
		type: String,
		default: ""
	}],
	isRegisted: {
		type: Boolean,
		default: false
	},
	description: {
		type: String,
		default: ""
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
}));