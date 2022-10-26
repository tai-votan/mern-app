import ArticleModels from "../models/article.models.js";
import { removeScriptTagObject, stripHTML, toSlug } from "../utils/utils.js";

export default {
  getAllArticle: async () => {
    try {
      const data = await ArticleModels.find();
      console.log(`Func: getAllArticle - PARAMS: data`, data);
      return data;
    } catch (err) {
      throw err;
    }
  },
  getArticleDetails: async (articleId) => {
    try {
      return await ArticleModels.findOne({ _id: articleId });
    } catch (err) {
      throw err;
    }
  },
  createArticle: async (article) => {
    try {
      const { name, slug, content, metaTitle, metaDescription } = article;
      return await new ArticleModels(
        removeScriptTagObject({
          ...article,
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
