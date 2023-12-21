"use strict";

const Student = require("../models/student.model");

exports.findAll = (req, res) => {
  Student.findAll((err, students) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: students });
  });
};



exports.create = (req, res) => {
  const new_student = new Student(req.body);

  let userId = req.user.user.user_id;

  new_student.user_id = userId;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Student.create(new_student, (err, student) => {
      if (err) {
        return res.send(err); 
      }
      res.json({
        error: false,
        status: 200,
        message: student,
      });
    });
  }
};


exports.findById = (req, res) => {
    let userId = req.user.user.user_id;
    console.log(userId)
    if(req.user.user.user_type == 'admin'){
        userId = req.params.id;
    }
  Student.findById(userId, (err, student) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: student });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    console.log(req.body)
    Student.update(
      req.params.id,
      new Student(req.body),
      (err, student) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "Student successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  Student.delete(req.params.id, (err, student) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "Student successfully deleted",
      status: 200,
    });
  });
};
