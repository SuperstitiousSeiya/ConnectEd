"use strict";
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.login = (req, res) => {
    const loginInfo = req.body;
  
    if (!loginInfo.username || !loginInfo.password) {
      return res.status(400).json({ error: true, message: "Invalid credentials" });
    }
  
    User.login(loginInfo, (err, user) => {
      if (err) {
        res.send(err);
      }
  
      if (user) {
        const expiresIn = 3600; 
        const accessToken = jwt.sign(
          { user },
          process.env.JWT_SECRET,
          { expiresIn }
        );
  
       
        const userWithoutPassword = {
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          user_type: user.user_type,
        };
  
        res.json({ status:200, message:"Success", accessToken, user: userWithoutPassword });
      } else {
        res.status(401).json({ status: 401, error: true, message: "Invalid username or password" });
      }
    });
};

  

exports.findAll = (req, res) => {
  User.findAll((err, users) => {
    if (err) {
      res.send(err);
    }

    // Exclude password field from the response
    const usersWithoutPassword = users.map((user) => {
      const { password, user_type, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    res.send({ status: 200, data: usersWithoutPassword });
  });
};

exports.create = (req, res) => {
    const { username, password, confirm_password, ...userData } = req.body;
 
    // Check if user_name is provided
    if (!username) {
        return res.status(400).json({
            status: 400,
            error: true,
            message: "Username is required",
            username: username
        });
    }

    // Check if user_name has a minimum length of 8 characters
    if (username.length < 8) {
        return res.status(400).json({
            status: 400,
            error: true,
            message: "Username must be at least 8 characters long",
        });
    }

    if (!password || !confirm_password || password !== confirm_password) {
        return res.status(400).json({
            status: 400,
            error: true,
            message: "Passwords do not match",
        });
    }

    // Rest of your code...
    const newUser = new User({ username, password, ...userData });

    User.create(newUser, (err, user) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json({
                error: false,
                status: 200,
                message: "User added successfully!",
                data: user,
            });
        }
    });
};






exports.findById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }

    // Exclude password field from the response
    const { password, ...userWithoutPassword } = user;
    res.json({ status: 200, data: userWithoutPassword });
  });
};



exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({
        error: true,
        message: 'Please provide at least one field for update',
      });
    } else {
      let userId = req.user.user.user_id;
      if (req.user.user.user_type === 'admin') {
        userId = req.params.id;
      }

      User.update(userId, new User(req.body), (err, user) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: 'User successfully updated',
          status: 200,
        });
      });
    }
  };
  

exports.delete = (req, res) => {

    let userId = req.user.user.user_id;
    if (req.user.user.user_type === 'admin') {
      userId = req.params.id;
    }

  User.delete(userId, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "User successfully deleted",
      status: 200,
    });
  });
};
