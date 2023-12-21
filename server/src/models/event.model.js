const dbConn = require("../../config/db.config");

const Event = function (event) {
  this.event_title = event.event_title;
  this.event_description = event.event_description;
  this.user_id = event.user_id;
  this.event_date = event.event_date;
  this.created_at = new Date();
};

Event.create = (newEvent, result) => {
  dbConn.query(
    "INSERT INTO events set ?",
    newEvent,
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

Event.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM events WHERE event_id = ?",
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

Event.findAll = (result) => {
  dbConn.query("SELECT * FROM events", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("events: ", res);
      result(null, res);
    }
  });
};

Event.update = (id, event, result) => {
  dbConn.query(
    "UPDATE events SET event_title =?, event_description = ?, user_id=?, event_date=? WHERE event_id = ?",
    [
      event.event_title,
      event.event_description,
      event.user_id,
      event.event_date,
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

Event.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM events WHERE event_id =?",
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

module.exports = Event;
