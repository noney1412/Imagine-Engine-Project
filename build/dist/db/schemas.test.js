"use strict";

var _schemas = require("./__graphQL__/_schemas");

var _queries = require("./__graphQL__/_schemas/queries");

var _typeDefs = require("./__graphQL__/_schemas/typeDefs");

var _seelog = require("./seelog");

var _seelog2 = _interopRequireDefault(_seelog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CheckList = [/Query/, /User/, /listUsers/, /_id/];
test("object assignment", async () => {
	const title = "Test MergeStrings";
	(0, _seelog2.default)(_schemas.gqlSchema, title, CheckList, [_queries.queryUser, _typeDefs.typeUser]);
	await CheckList.map(v => expect(_schemas.gqlSchema).toMatch(v));
});

const QueyList = [/Query/, /listUsers/, /\[User\]/];
test("type Query", async () => {
	await QueyList.map(v => expect(_queries.queryUser).toMatch(v));
});