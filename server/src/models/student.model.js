const dbConn = require("../../config/db.config");

const Student = function (student) {
  this.user_id = student.user_id;
  this.is_setup = 0;
  this.status = student.status;
};

Student.create = (newStudent, result) => {
    const { user_id } = newStudent; // Assuming user_id is part of newStudent
  
    // Check the count of students for the given user_id
    dbConn.query(
      "SELECT COUNT(*) AS studentCount FROM students WHERE user_id = ?",
      user_id,
      (countErr, countResult) => {
        if (countErr) {
          console.log("Error checking student count: ", countErr);
          return result({ error: true, message: "Error checking student count", details: countErr }, null);
        }
  
        const studentCount = countResult[0].studentCount;
  
        if (studentCount > 0) {
          console.log(`User ${user_id} already has students. Not inserting new student.`);
          return result({ error: true, message: `User ${user_id} already has students. Not inserting new student.` }, null);
        }

        dbConn.query(
          "INSERT INTO students SET ?",
          newStudent,
          (insertErr, insertResult) => {
            if (insertErr) {
              console.log("Error inserting student: ", insertErr);
              return result({ error: true, message: "Error inserting student", details: insertErr }, null);
            } else {
              console.log(insertResult.insertId);
              return result(null, { insertId: insertResult.insertId });
            }
          }
        );
      }
    );
};




Student.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM students WHERE user_id = ?",
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

Student.findAll = (result) => {
  dbConn.query("SELECT * FROM students", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("students: ", res);
      result(null, res);
    }
  });
};

Student.update = (id, student, result) => {
    // Prepare the update query based on provided and non-blank fields
    const updateFields = [];
    const updateValues = [];
  
    if (student.user_id !== undefined && student.user_id !== "") {
      updateFields.push("user_id=?");
      updateValues.push(student.user_id);
    }
  
    if (student.is_setup !== undefined) {
      updateFields.push("is_setup=?");
      updateValues.push(student.is_setup);
    }
  
    if (student.status !== undefined && student.status !== "") {
      updateFields.push("status=?");
      updateValues.push(student.status);
    }
  
    // Check if any fields are provided for the update
    if (updateFields.length === 0) {
      return result({ error: true, message: "No valid fields provided for update" }, null);
    }
  
    // Add the student_id to the values array
    updateValues.push(id);
  
    const updateQuery = `UPDATE students SET ${updateFields.join(", ")} WHERE user_id = ?`;
  

    dbConn.query(updateQuery, updateValues, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  

Student.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM students WHERE student_id =?",
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

module.exports = Student;
