import { graphqlExpress, graphiqlExpress } from "apollo-server-express";

import { gqlwrsvSchema, userCollection } from "../db";

export default (server, dev) => {
	server.use(
		"/graphql",
		graphqlExpress({ schema: gqlwrsvSchema, context: { userCollection } })
	);

	if (dev)
		server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
};
