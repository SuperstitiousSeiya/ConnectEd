const dbConn = require("../../config/db.config");

const User = function (user) {
  this.username = user.username;
  this.password = user.password;
  this.email = user.email;
  this.user_type = "student";
  this.created_at = new Date();
};


User.login = (loginInfo, result) => {
    dbConn.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [loginInfo.username, loginInfo.password],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res[0]);
        }
      }
    );
  };
  

  User.create = (newUser, result) => {
    checkUsernameAndEmailExist(newUser.username, newUser.email, (err, existingUser) => {
      if (err) {
        result(err, null);
      } else if (existingUser) {
        result({
            status: 400,
          error: true,
          message: 'Username or email already exists',
        });
      } else {
        // Username and email are valid, proceed with user creation
        dbConn.query(
          'INSERT INTO users SET ?',
          newUser,
          (err, res) => {
            if (err) {
              console.log('error: ', err);
              result(err, null);
            } else {
              console.log(res.insertId);
              result(null, res.insertId);
            }
          }
        );
      }
    });
  };
  
  
  function checkUsernameAndEmailExist(username, email, callback) {
    const sqlQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    dbConn.query(sqlQuery, [username, email], (err, res) => {
      if (err) {
        console.log('error: ', err);
        callback(err, null);
      } else {
        const existingUser = res[0];
        callback(null, existingUser);
      }
    });
  }
  



User.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM users WHERE user_id = ?",
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

User.findAll = (result) => {
  dbConn.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("users: ", res);
      result(null, res);
    }
  });
};

User.update = (id, user, result) => {
    const updateFields = [];
    const updateValues = [];
  
    // Check each field and add it to the update query if not blank
    if (user.username) {
      updateFields.push('username = ?');
      updateValues.push(user.username);
    }
  
    if (user.password) {
      updateFields.push('password = ?');
      updateValues.push(user.password);
    }
  
    if (user.email) {
      updateFields.push('email = ?');
      updateValues.push(user.email);
    }
  
    // Ensure there are fields to update
    if (updateFields.length === 0) {
      return result({
        error: true,
        message: 'No fields provided for update',
      });
    }
  
    // Construct the SQL query
    const sqlQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE user_id = ?`;
    const sqlValues = [...updateValues, id];
  
    dbConn.query(sqlQuery, sqlValues, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
User.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM users WHERE user_id =?",
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

module.exports = User;
