import ArticleServices from "../services/article.services.js";

export default {
  getAllArticle: async (req, res) => {
    try {
      res.json({
        data: {
          list: await ArticleServices.getAllArticle(),
          total: 1000,
        },
        message: "success",
      });
    } catch (err) {
      console.log(err);
    }
  },
  getArticleDetails: async (req, res) => {
    try {
      const { articleId } = req.params;
      const article = await ArticleServices.getArticleDetails(articleId);

      res.json({
        data: article || {},
        message: "success",
      });
    } catch (err) {
      console.log(err);
    }
  },
  createArticle: async (req, res) => {
    try {
      res.status(201).json({
        message: "success",
        data: await ArticleServices.createArticle(req.body),
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
