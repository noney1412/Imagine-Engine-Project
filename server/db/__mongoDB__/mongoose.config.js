import mongoose from "mongoose";

mongoose.Promise;
mongoose.set("debug", process.env.DEBUG);
mongoose.connect(process.env.MONGO_URL, {
	useMongoClient: true
});

console.log("✔️  mongoose has been connecting");

export default mongoose;
