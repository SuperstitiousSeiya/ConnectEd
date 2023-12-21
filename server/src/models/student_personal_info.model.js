const dbConn = require("../../config/db.config");

const StudentPersonalInfo = function (personalInfo) {
    this.user_id = personalInfo.user_id
    this.course = personalInfo.course;
  this.student_type = personalInfo.student_type;
  this.lrn = personalInfo.lrn;
  this.sex = personalInfo.sex;
  this.last_name = personalInfo.last_name;
  this.first_name = personalInfo.first_name;
  this.middle_name = personalInfo.middle_name;
  this.date_of_birth = personalInfo.date_of_birth;
  this.religion = personalInfo.religion;
  this.permanent_address = personalInfo.permanent_address;
  this.postal_code = personalInfo.postal_code;
  this.current_address = personalInfo.current_address;
  this.civil_status = personalInfo.civil_status;
};

StudentPersonalInfo.create = (newPersonalInfo, result) => {
    const { user_id } = newPersonalInfo; // Assuming user_id is part of newPersonalInfo
  
    // Check the count of records for the given user_id
    dbConn.query(
      "SELECT COUNT(*) AS personalInfoCount FROM student_personal_info WHERE user_id = ?",
      user_id,
      (countErr, countResult) => {
        if (countErr) {
          console.log("Error checking personal info count: ", countErr);
          result(countErr, null);
          return;
        }
  
        const personalInfoCount = countResult[0].personalInfoCount;
  
        // Check if user_id has more than 0 personal info records
        if (personalInfoCount > 0) {
          result(`User ${user_id} already has personal info records. Not inserting new personal info.`, null);
          return;
        }
  
        // Proceed with inserting the new personal info
        dbConn.query(
          "INSERT INTO student_personal_info SET ?",
          newPersonalInfo,
          (insertErr, insertResult) => {
            if (insertErr) {
              console.log("Error inserting personal info: ", insertErr);
              result(insertErr, null);
            } else {
              console.log(insertResult.insertId);
              result(null, insertResult.insertId);
            }
          }
        );
      }
    );
  };
  

StudentPersonalInfo.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM student_personal_info WHERE user_id = ?",
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

StudentPersonalInfo.findAll = (result) => {
  dbConn.query(
    "SELECT * FROM student_personal_info",
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(null, err);
      } else {
        console.log("personalInfo: ", res);
        result(null, res);
      }
    }
  );
};

StudentPersonalInfo.update = (id, personalInfo, result) => {

  dbConn.query(
    "UPDATE student_personal_info SET student_type=?, lrn=?, sex=?, last_name=?, first_name=?, middle_name=?, date_of_birth=?, religion=?, permanent_address=?, postal_code=?, current_address=?, civil_status=? WHERE student_id = ?",
    [
      personalInfo.student_type,
      personalInfo.lrn,
      personalInfo.sex,
      personalInfo.last_name,
      personalInfo.first_name,
      personalInfo.middle_name,
      personalInfo.date_of_birth,
      personalInfo.religion,
      personalInfo.permanent_address,
      personalInfo.postal_code,
      personalInfo.current_address,
      personalInfo.civil_status,
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

StudentPersonalInfo.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM student_personal_info WHERE student_id =?",
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

module.exports = StudentPersonalInfo;
