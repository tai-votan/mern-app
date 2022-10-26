import CategoryModels from "../models/category.models.js";
import { removeScriptTagObject, stripHTML, toSlug } from "../utils/utils.js";

export default {
  getAllCategory: async () => {
    try {
      return await CategoryModels.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "authorId",
            foreignField: "_id",
            as: "author",
          },
        },
        { $unwind: "$author" },
      ]);
    } catch (err) {
      throw err;
    }
  },
  getCategoryDetails: async (categoryId) => {
    try {
      return await CategoryModels.findOne({ _id: categoryId });
    } catch (err) {
      throw err;
    }
  },
  createCategory: async (category) => {
    try {
      const { name, slug, content, metaTitle, metaDescription } = category;
      return await new CategoryModels(
        removeScriptTagObject({
          ...category,
          slug: toSlug(slug || name),
          metaTitle: stripHTML(metaTitle || name),
          metaDescription: stripHTML(metaDescription || content),
        })
      ).save();
    } catch (err) {
      throw err;
    }
  },
};
