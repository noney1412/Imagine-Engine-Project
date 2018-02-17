import mongoose from "../mongoose.config";

const { Schema } = mongoose;

export default mongoose.model(
	"User",
	Schema({
		provider: {
			type: String,
			required: true
		},
		_id: {
			type: String,
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
		name: {
			firtname: { type: String, default: "" },
			lastname: { type: String, default: "" }
		},
		emails: [
			{
				value: String,
				type: String,
				default: ""
			}
		],
		isRegisted: {
			type: Boolean,
			default: false
		},
		description: {
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
