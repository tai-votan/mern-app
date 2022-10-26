import { model, Schema } from "mongoose";

export default model(
  "users",
  Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, default: "other" },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  })
);
