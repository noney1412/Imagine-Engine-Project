"use strict";

var _index = require("./index");

var _mongoose = require("./__mongoDB__/mongoose.config");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _seelog = require("./seelog");

var _seelog2 = _interopRequireDefault(_seelog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("When Server Run", () => {
	it("MongoDB should connect", () => {
		_mongoose2.default.connect(process.env.MONGO_URL, {
			useMongoClient: true
		});
	});
});

test("should Prepare UserCollections ", () => {});