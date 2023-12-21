const dbConn = require("../../config/db.config");

const StudentEducationalBackground = function (educationalBackground) {
  this.student_id = educationalBackground.student_id;
  this.elem_school_name = educationalBackground.elem_school_name;
  this.elem_address = educationalBackground.elem_address;
  this.elem_inclusive_date = educationalBackground.elem_inclusive_date;
  this.hs_school_name = educationalBackground.hs_school_name;
  this.hs_address = educationalBackground.hs_address;
  this.hs_inclusive_date = educationalBackground.hs_inclusive_date;
  this.sh_school_name = educationalBackground.sh_school_name;
  this.sh_address = educationalBackground.sh_address;
  this.sh_inclusive_date = educationalBackground.sh_inclusive_date;
  this.sh_strand = educationalBackground.sh_strand;
  this.college_school_name = educationalBackground.college_school_name;
  this.college_address = educationalBackground.college_address;
  this.college_inclusive_date = educationalBackground.college_inclusive_date;
  this.college_course = educationalBackground.college_course;
};

StudentEducationalBackground.create = (newEducationalBackground, result) => {
  dbConn.query(
    "INSERT INTO student_educational_background set ?",
    newEducationalBackground,
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

StudentEducationalBackground.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM student_educational_background WHERE student_id = ?",
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

StudentEducationalBackground.findAll = (result) => {
  dbConn.query(
    "SELECT * FROM student_educational_background",
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(null, err);
      } else {
        console.log("educationalBackground: ", res);
        result(null, res);
      }
    }
  );
};

StudentEducationalBackground.update = (
  id,
  educationalBackground,
  result
) => {
  dbConn.query(
    "UPDATE student_educational_background SET elem_school_name=?, elem_address=?, elem_inclusive_date=?, hs_school_name=?, hs_address=?, hs_inclusive_date=?, sh_school_name=?, sh_address=?, sh_inclusive_date=?, sh_strand=?, college_school_name=?, college_address=?, college_inclusive_date=?, college_course=? WHERE student_id = ?",
    [
      educationalBackground.elem_school_name,
      educationalBackground.elem_address,
      educationalBackground.elem_inclusive_date,
      educationalBackground.hs_school_name,
      educationalBackground.hs_address,
      educationalBackground.hs_inclusive_date,
      educationalBackground.sh_school_name,
      educationalBackground.sh_address,
      educationalBackground.sh_inclusive_date,
      educationalBackground.sh_strand,
      educationalBackground.college_school_name,
      educationalBackground.college_address,
      educationalBackground.college_inclusive_date,
      educationalBackground.college_course,
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

StudentEducationalBackground.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM student_educational_background WHERE student_id =?",
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

module.exports = StudentEducationalBackground;
