import CategoryServices from "../services/category.services.js";

export default {
  getAllCategory: async (req, res) => {
    try {
      res.json({
        data: {
          list: await CategoryServices.getAllCategory(),
          total: 1000,
        },
        message: "success",
      });
    } catch (err) {
      console.log(err);
    }
  },
  getCategoryDetails: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const category = await CategoryServices.getCategoryDetails(categoryId);

      res.json({
        data: category || {},
        message: "success",
      });
    } catch (err) {
      console.log(err);
    }
  },
  createCategory: async (req, res) => {
    try {
      res.status(201).json({
        message: "success",
        data: await CategoryServices.createCategory(req.body),
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
