import { model, Schema } from "mongoose";

export default model(
  "articles",
  Schema({
    articleId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  })
);
