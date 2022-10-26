import express from "express";
import articleControllers from "../controllers/article.controllers.js";

export default (e) => {
  const router = express.Router();

  e.use("/articles", router);

  /**
   * @swagger
   * /api/user/login:
   *  post:
   *    tags: [User]
   *    responses:
   *      200:
   *        description: OK
   *      400:
   *        description: Bad request
   *      500:
   *        description: Server Error
   *    requestBody:
   *      content:
   *        application/json:
   *          examples:
   *            admin:
   *              value: { "userName": "admin", "password": "admin" }
   *            user:
   *              value: { "userName": "user", "password": "user" }
   *          schema:
   *            properties:
   *              userName:
   *                type: string
   *              password:
   *                type: string
   *            required:
   *                - userName
   *                - password
   *
   *    description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
   * /api/user/currentUser:
   *  get:
   *    tags: [User]
   *    security:
   *      bearerAuth:
   *        type: http
   *        scheme: bearer
   *        bearerFormat: JWT
   *    responses:
   *      200:
   *        description: OK
   *      400:
   *        description: Bad request
   *      500:
   *        description: Server Error
   *    description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
   */

  router.get("/", articleControllers.getAllArticle);
  router.get("/:articleId", articleControllers.getArticleDetails);
  router.post("/", articleControllers.createArticle);
};
