import mysql from "mysql";

export const db = mysql.createConnection({
  lost: "localhost",
  user: "root",
  password: "sunil12345",
  database: "blog",
});
db.connect((err) => {
  if (err) {
    console.log("err", err);
  } else console.log("connect");
});
