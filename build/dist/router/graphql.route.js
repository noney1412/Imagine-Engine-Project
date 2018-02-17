"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _apolloServerExpress = require("apollo-server-express");

var _db = require("../db");

exports.default = (server, dev) => {
	server.use("/graphql", (0, _apolloServerExpress.graphqlExpress)({ schema: _db.gqlwrsvSchema, context: { userCollection: _db.userCollection } }));

	if (dev) server.use("/graphiql", (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: "/graphql" }));
};