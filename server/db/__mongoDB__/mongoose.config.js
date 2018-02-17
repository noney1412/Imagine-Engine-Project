import mongoose from "mongoose";

mongoose.Promise;
mongoose.set("debug", process.env.DEBUG);
mongoose.connect(process.env.MONGO_URL);

export default mongoose;
