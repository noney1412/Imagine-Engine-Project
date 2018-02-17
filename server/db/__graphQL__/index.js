import { makeExecutableSchema } from "graphql-tools";

import { gqlSchema } from "./_schemas";
import { resolveQuery } from "./_resolvers";

export const gqlwrsvSchema = makeExecutableSchema({
	typeDefs: gqlSchema,
	resolvers: resolveQuery
});
