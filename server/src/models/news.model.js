const dbConn = require("../../config/db.config");

const News = function (news) {
  this.news_title = news.news_title;
  this.news_description = news.news_description;
  this.user_id = news.user_id;
  this.created_at = new Date();
};

News.create = (newNews, result) => {
  dbConn.query(
    "INSERT INTO news set ?",
    newNews,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

News.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM news WHERE news_id = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

News.findAll = (result) => {
  dbConn.query("SELECT * FROM news", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("news: ", res);
      result(null, res);
    }
  });
};

News.update = (id, news, result) => {
  dbConn.query(
    "UPDATE news SET news_title =?, news_description = ?, user_id=? WHERE news_id = ?",
    [
      news.news_title,
      news.news_description,
      news.user_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

News.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM news WHERE news_id =?",
    [id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = News;
