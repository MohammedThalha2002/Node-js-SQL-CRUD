const pool = require("../config/db");
const mysql = require("mysql2");

const getallPosts = async (req, res) => {
  let selectQuery = "select * from posts";
  const [posts] = await pool.query(selectQuery);
  console.log(posts);
  res.send(posts);
};

const getonlyPosts = async (req, res) => {
  const val = "desc";
  let selectQuery = `select body from posts
                     order by id ${val};`;
  const [posts] = await pool.query(selectQuery);
  res.send(posts);
};

const getPostById = async (req, res) => {
  const id = req.body.id;
  let selectedQuery = `select * from posts
                      where id = ?`;
  await pool
    .query(selectedQuery, [id])
    .then((post) => res.send(post[0]))
    .catch((err) => res.status(500).send(err.message));
};

const addPost = async (req, res) => {
  const { title, body, date } = req.body;

  let selectedQuery = `insert into posts(title, body, date)
                       values(?,?,?);`;

  await pool
    .query(selectedQuery, [title, body, date])
    .then((post) =>
      res.send({
        title: title,
        body: body,
        date: date,
      })
    )
    .catch((err) => res.status(500).send(err.message));
};

const updatePost = async (req, res) => {
  const { id, title, body, date } = req.body;

  let selectedQuery = `
  update posts set
  title = ?,
  body = ?,
  date = ?
  where id = ?`;

  await pool
    .query(selectedQuery, [title, body, date, id])
    .then((post) =>
      res.send({
        id: id,
        title: title,
        body: body,
        date: date,
      })
    )
    .catch((err) => res.status(500).send(err.message));
};

const deletePostById = async (req, res) => {
  const id = req.body.id;

  let selectedQuery = `
  delete from posts
  where id = ?;`;

  await pool
    .query(selectedQuery, [id])
    .then((post) => {
      res.send("deleted successfully");
    })
    .catch((err) => res.send("Id not found", err.message));
};

module.exports = {
  getallPosts,
  getonlyPosts,
  getPostById,
  addPost,
  updatePost,
  deletePostById,
};
