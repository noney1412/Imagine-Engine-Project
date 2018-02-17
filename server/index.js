import { } from "dotenv/config";
import express from "express";
const next = require('next')

import { graphqlRouter } from "./router";

const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dir: "./client", dev });
const handle = appNext.getRequestHandler();

/* ------------ Port & CORS */
const PORT = parseInt(process.env.PORT, 10) || 3000;


appNext
	.prepare()
	.then(() => {

		const server = express();

		graphqlRouter(server, dev);

		/* ------------ MiddleWare */
		server.use(express.json());

		/* ------------ Router */

		server.get("*", (req, res) => handle(req, res));

		server.listen(PORT, err => {
			if (err) throw err;
			console.log(
				`Server http://localhost:${PORT}/graphiql \n Index http://localhost:${PORT}`
			);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
