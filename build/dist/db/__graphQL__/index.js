"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.gqlwrsvSchema = undefined;

var _graphqlTools = require("graphql-tools");

var _schemas = require("./_schemas");

var _resolvers = require("./_resolvers");

const gqlwrsvSchema = exports.gqlwrsvSchema = (0, _graphqlTools.makeExecutableSchema)({
	typeDefs: _schemas.gqlSchema,
	resolvers: _resolvers.resolveQuery
});