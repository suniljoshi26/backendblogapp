import mysql from "mysql";

export const db = mysql.createConnection({
  lost: "localhost",
  user: "root",
  password: "sunil123",
  database: "blog",
});
