import { typeUser } from "./typeDefs";
import { queryUser } from "./queries";
import { mutateUser } from "./mutations";
import { subscribeUser } from "./subscriptions";

import { mergeStrings } from "gql-merge";

const gqlSchema = mergeStrings([
	typeUser,
	queryUser
	// mutateUser,
	// subscribeUser
]);

export { gqlSchema };
