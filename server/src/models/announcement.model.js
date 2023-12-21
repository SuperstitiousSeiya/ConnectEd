const dbConn = require("../../config/db.config");

const Announcement = function (announcement) {
  this.announcement_title = announcement.announcement_title;
  this.announcement_description = announcement.announcement_description;
  this.user_id = announcement.user_id;
  this.created_at = new Date();
};


Announcement.create = (newAnnouncement, result) => {
  dbConn.query(
    "INSERT INTO announcements set ?",
    newAnnouncement,
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

Announcement.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM announcements WHERE announcement_id = ?",
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

Announcement.findAll = (result) => {
  dbConn.query("SELECT * FROM announcements", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("announcements: ", res);
      result(null, res);
    }
  });
};

Announcement.update = (id, announcement, result) => {
  dbConn.query(
    "UPDATE announcements SET announcement_title =?, announcement_description = ?, user_id=? WHERE announcement_id = ?",
    [
      announcement.announcement_title,
      announcement.announcement_description,
      announcement.user_id,
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

Announcement.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM announcements WHERE announcement_id =?",
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

module.exports = Announcement;
