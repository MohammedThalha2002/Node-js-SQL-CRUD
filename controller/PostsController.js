const pool = require("../config/db");
const mysql = require("mysql2");

exports.getallPosts = (req, res) => {
  console.log("Get all posts");
  let selectQuery = "select * from posts";
  const allPosts = pool.query(selectQuery, (err, res) => {
    if (err) return "error";
    else return res;
  });
  console.log(allPosts);
  res.send(allPosts);
};
