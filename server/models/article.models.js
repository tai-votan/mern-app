import { model, Schema } from "mongoose";

export default model(
  "articles",
  Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    public: { type: Date, default: new Date() },
    featuredImage: { type: String, default: "" },
    visibility: { type: Boolean, default: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    categoryId: { type: Schema.Types.ObjectId, required: true },
    tags: [{ type: Schema.Types.ObjectId }],
    slug: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    read: { type: Number, default: 0 },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  })
);
