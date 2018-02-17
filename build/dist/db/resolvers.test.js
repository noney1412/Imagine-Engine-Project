"use strict";

var _resolvers = require("./__graphQL__/_resolvers/");

var _seelog = require("./seelog");

var _seelog2 = _interopRequireDefault(_seelog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MockQueryResolver = {
	Query: {
		listUsers: expect.any(Function)
	}
};

test("Query Resolver TEST", done => {
	expect(_resolvers.resolveQuery).toMatchObject(MockQueryResolver);
	done();
});