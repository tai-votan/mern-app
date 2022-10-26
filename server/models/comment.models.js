import { Schema, model } from "mongoose";

export default model(
  "articles",
  Schema({
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    articleId: { type: Schema.Types.ObjectId, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  })
);
