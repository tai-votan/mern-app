import { model, Schema } from "mongoose";

export default model(
  "roles",
  Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    roleName: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  })
);
