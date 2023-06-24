import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();
app.use(express.json());
app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.listen(8000, () => {
  console.log("connected");
});
