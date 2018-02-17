"use strict";

require("dotenv/config");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _router = require("./router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const next = require('next');

const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dir: "./client", dev });
const handle = appNext.getRequestHandler();

const PORT = parseInt(process.env.PORT, 10) || 3000;

appNext.prepare().then(() => {

		const server = (0, _express2.default)();

		(0, _router.graphqlRouter)(server, dev);

		server.use(_express2.default.json());

		server.get("*", (req, res) => handle(req, res));

		server.listen(PORT, err => {
				if (err) throw err;
		});
}).catch(ex => {
		process.exit(1);
});