import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import user from "./user.js";
import article from "./article.js";
import category from "./category.js";

export default (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(
      swaggerJsdoc({
        definition: {
          openapi: "3.0.0",
          info: { title: "Blog Express API with Swagger", version: "1.0.0" },
        },
        apis: ["./routes/*.js"],
      })
    )
  );

  // // error handling middleware called
  // app.use((req, res, next) => {
  //   const error = new Error("Not found");
  //   error.status = 404;
  //   next(error);
  // });
  //
  // // error handler middleware
  // app.use((error, req, res) => {
  //   const status = error.status || 500;
  //   res.status(status).send({
  //     error: {
  //       status,
  //       message: error.message || "Internal Server Error",
  //     },
  //   });
  // });

  user(app);
  article(app);
  category(app);
};
