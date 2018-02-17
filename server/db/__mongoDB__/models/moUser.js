import mongoose from "../mongoose.config";

const { Schema } = mongoose;

export default mongoose.model(
	"User",
	Schema({
		provider: {
			type: String,
			required: true
		},
		vocab: {
			type: [String]
		},
		_id: {
			type: String
		},
		email: {
			type: String,
			unique: true
		},
		displayName: { type: String, default: "" },
		profile_image: {
			type: String,
			default: ""
		},
		created_at: {
			type: Date,
			default: Date.now
		},
		updated_at: {
			type: Date,
			default: Date.now
		}
	})
);
