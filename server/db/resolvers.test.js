import { resolveQuery } from "./__graphQL__/_resolvers/";
import seelog from "./seelog";

const MockQueryResolver = {
	Query: {
		listUsers: expect.any(Function)
	}
};

test("Query Resolver TEST", done => {
	// const title = "TestResolver";
	// seelog(
	// 	JSON.stringify(resolveQuery),
	// 	title,
	// 	JSON.stringify(MockQueryResolver)
	// );
	console.log("🔶 ", resolveQuery);
	expect(resolveQuery).toMatchObject(MockQueryResolver);
	done();
});
