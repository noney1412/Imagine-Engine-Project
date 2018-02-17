//ยังไม่ใช้ตอนนี้

import { } from "dotenv/config";
import express from "express";
import next from "next";
import cors from 'cors'
import compression from 'compression'

import { graphqlRouter } from "./router";

const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dir: "./client", dev });
const handle = appNext.getRequestHandler();

/* ------------ Port & CORS */
const PORT = parseInt(process.env.PORT, 10) || 3000;

var corsOptions = {
	origin:
		"http://localhost:3000",
	credentials: true
}

appNext
	.prepare()
	.then(() => {
		const server = express();

		/* ------------ MiddleWare */
		server.use(express.json());
		server.use(cors(corsOptions));
		server.use(compression());

		/* ------------ Router */
		graphqlRouter(server, dev);

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
