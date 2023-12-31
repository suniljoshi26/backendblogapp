import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT  * FROM posts";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  console.log(req.params);
  const q =
    "SELECT  `username`,`title` ,`des`,p.img,`cat`,`date` FROM user u JOIN posts p ON u.id=p.userId WHERE  p.id = ?";
  console.log(q);
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json("from controller");
};
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return rex.status(403).json("Token is not Valid!");

    const postId = res.params.id;
    const q = "DELETE FORM posts WHERE `id` =? and `userId`=?";
    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post");

      return res.json("Post has been deleted! ");
    });
  });
};
export const updatePost = (req, res) => {
  res.json("from controller");
};
