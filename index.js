import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
  // req.file is the `avatar` file
  console.log(req);
  // req.body will hold the text fields, if there were any
});
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("connected");
});
