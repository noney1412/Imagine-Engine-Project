"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.gqlSchema = undefined;

var _typeDefs = require("./typeDefs");

var _queries = require("./queries");

var _mutations = require("./mutations");

var _subscriptions = require("./subscriptions");

var _gqlMerge = require("gql-merge");

const gqlSchema = (0, _gqlMerge.mergeStrings)([_typeDefs.typeUser, _queries.queryUser]);

exports.gqlSchema = gqlSchema;