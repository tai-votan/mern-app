import dotenv from "dotenv";
dotenv.config();

export const jwtConfig = {
  expiresIn: "1 day",
  issuer: "One",
  audience: "cms-dashboard",
};

export default {
  jwtConfig,
  secretToken: process.env.JWT_TOKEN_SECRET,
};
