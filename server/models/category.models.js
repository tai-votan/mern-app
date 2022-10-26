import { Schema, model } from "mongoose";

export default model(
  "categories",
  Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    featuredImage: { type: String },
    visibility: { type: Boolean, default: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    tag: { type: Array, default: [] },
    slug: { type: String, required: true },
    public: { type: Date, default: new Date() },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  })
);
