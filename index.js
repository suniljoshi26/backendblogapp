import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
const app = express();
app.use(express.json());
app.use("/api/post ", postRoutes);
app.use("/api/auth ", authRoutes);

app.listen(8000, () => {
  console.log("connected");
});
