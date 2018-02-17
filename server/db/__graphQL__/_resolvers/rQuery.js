export default {
	Query: {
		listUsers: async (parent, args, { userCollection }) => {
			const listUser = await userCollection.find();
			return listUser.map(x => {
				return x;
			});
		}
	}
};
