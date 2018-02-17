import { typeUser } from "./typeDefs";
import { queryUser } from "./queries";
import { mutateUser } from "./mutations";
import { subscribeUser } from "./subscriptions";

import { mergeStrings } from "gql-merge";

//เช็คค่าหลัง Merge ตัวนี้
const gqlSchema = mergeStrings([
	typeUser,
	queryUser
	// mutateUser,
	// subscribeUser
]);

export { gqlSchema };
