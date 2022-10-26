import UserServices from "../services/user.services.js";

export default {
  getCurrentUser: async (req, res) => {
    try {
      const user = await UserServices.getCurrentUser();
      const { userName, id, firstName, lastName, isActive } = user;

      res.json({
        user: {
          id,
          userName,
          firstName,
          lastName,
          isActive,
        },
        token: "userToken",
      });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await UserServices.createUser(req.body);
      res.json({ user, message: "success" });
    } catch (err) {
      console.log(err);
    }
  },
};
