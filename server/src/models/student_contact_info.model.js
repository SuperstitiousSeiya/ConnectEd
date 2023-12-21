const dbConn = require("../../config/db.config");

const StudentContactInfo = function (studentContactInfo) {
  this.student_id = studentContactInfo.student_id;
  this.father_name = studentContactInfo.father_name;
  this.father_age = studentContactInfo.father_age;
  this.father_education_attainment =
    studentContactInfo.father_education_attainment;
  this.father_occupation = studentContactInfo.father_occupation;
  this.father_contact_number = studentContactInfo.father_contact_number;
  this.mother_name = studentContactInfo.mother_name;
  this.mother_age = studentContactInfo.mother_age;
  this.mother_education_attainment =
    studentContactInfo.mother_education_attainment;
  this.mother_occupation = studentContactInfo.mother_occupation;
  this.mother_contact_number = studentContactInfo.mother_contact_number;
  this.guardian_name = studentContactInfo.guardian_name;
  this.guardian_age = studentContactInfo.guardian_age;
  this.guardian_education_attainment =
    studentContactInfo.guardian_education_attainment;
  this.guardian_occupation = studentContactInfo.guardian_occupation;
  this.guardian_contact_number = studentContactInfo.guardian_contact_number;
  this.spouse_name = studentContactInfo.spouse_name;
  this.spouse_age = studentContactInfo.spouse_age;
  this.spouse_education_attainment =
    studentContactInfo.spouse_education_attainment;
  this.spouse_occupation = studentContactInfo.spouse_occupation;
  this.spouse_contact_number = studentContactInfo.spouse_contact_number;
  this.email_address = studentContactInfo.email_address;
  this.cell_num = studentContactInfo.cell_num;
};

StudentContactInfo.create = (newStudentContactInfo, result) => {
  dbConn.query(
    "INSERT INTO student_contact_info set ?",
    newStudentContactInfo,
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

StudentContactInfo.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM student_contact_info WHERE student_id = ?",
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

StudentContactInfo.findAll = (result) => {
  dbConn.query("SELECT * FROM student_contact_info", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("studentContactInfo: ", res);
      result(null, res);
    }
  });
};

StudentContactInfo.update = (id, studentContactInfo, result) => {
  dbConn.query(
    "UPDATE student_contact_info SET father_name=?, father_age=?, father_education_attainment=?, father_occupation=?, father_contact_number=?, mother_name=?, mother_age=?, mother_education_attainment=?, mother_occupation=?, mother_contact_number=?, guardian_name=?, guardian_age=?, guardian_education_attainment=?, guardian_occupation=?, guardian_contact_number=?, spouse_name=?, spouse_age=?, spouse_education_attainment=?, spouse_occupation=?, spouse_contact_number=?, email_address=?, cell_num=? WHERE student_id = ?",
    [
      studentContactInfo.father_name,
      studentContactInfo.father_age,
      studentContactInfo.father_education_attainment,
      studentContactInfo.father_occupation,
      studentContactInfo.father_contact_number,
      studentContactInfo.mother_name,
      studentContactInfo.mother_age,
      studentContactInfo.mother_education_attainment,
      studentContactInfo.mother_occupation,
      studentContactInfo.mother_contact_number,
      studentContactInfo.guardian_name,
      studentContactInfo.guardian_age,
      studentContactInfo.guardian_education_attainment,
      studentContactInfo.guardian_occupation,
      studentContactInfo.guardian_contact_number,
      studentContactInfo.spouse_name,
      studentContactInfo.spouse_age,
      studentContactInfo.spouse_education_attainment,
      studentContactInfo.spouse_occupation,
      studentContactInfo.spouse_contact_number,
      studentContactInfo.email_address,
      studentContactInfo.cell_num,
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

StudentContactInfo.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM student_contact_info WHERE student_id =?",
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

module.exports = StudentContactInfo;
