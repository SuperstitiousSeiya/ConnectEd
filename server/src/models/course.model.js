const dbConn = require("../../config/db.config");

const Course = function (course) {
  this.course_name = course.course_name;
  this.slots = course.slots;
};

Course.create = (newCourse, result) => {
  dbConn.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Course.findById = (id, result) => {
  dbConn.query("SELECT * FROM courses WHERE course_id = ?", id, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Course.findAll = (result) => {
  dbConn.query("SELECT * FROM courses", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("courses: ", res);
      result(null, res);
    }
  });
};

Course.update = (id, course, result) => {
  dbConn.query(
    "UPDATE courses SET course_name = ?, slots = ? WHERE course_id = ?",
    [course.course_name, course.slots, id],
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

Course.delete = (id, result) => {
  dbConn.query("DELETE FROM courses WHERE course_id = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Course;
