import { userCollection } from "./index";
import mongoose from "./__mongoDB__/mongoose.config";
import seelog from "./seelog";

describe("When Server Run", () => {
	it("MongoDB should connect", () => {
		mongoose.connect(process.env.MONGO_URL, {
			useMongoClient: true
		});
	});
});

test("should Prepare UserCollections ", () => {
	// seelog(userCollection.modelName, "Test user Collection of MongoDB");
	console.log("😂	Collection Name :", userCollection.modelName);
});
