import UserModels from "../models/user.models.js";

export default {
  getCurrentUser: async () => {
    try {
      // @TODO: implement jwt
      return await UserModels.findOne({ email: "tai.vo@dev.com" });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (params) => {
    try {
      const user = {
        ...params,
        user_name: params.userName,
        first_name: params.firstName,
        last_name: params.lastName,
      };
      return await new UserModels(user).save();
    } catch (err) {
      console.log(err);
    }
  },
};
