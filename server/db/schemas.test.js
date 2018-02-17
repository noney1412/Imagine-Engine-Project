import { gqlSchema } from "./__graphQL__/_schemas";
import { queryUser } from "./__graphQL__/_schemas/queries";
import { typeUser } from "./__graphQL__/_schemas/typeDefs";
import seelog from "./seelog";

const CheckList = [/Query/, /User/, /listUsers/, /_id/];
test("object assignment", async () => {
	const title = "Test MergeStrings";
	seelog(gqlSchema, title, CheckList, [queryUser, typeUser]);
	await CheckList.map(v => expect(gqlSchema).toMatch(v));
});

const QueyList = [/Query/, /listUsers/, /\[User\]/];
test("type Query", async () => {
	// const title = "Test Type Query";
	// seelog(queryUser, title, QueyList);
	await QueyList.map(v => expect(queryUser).toMatch(v));
});
