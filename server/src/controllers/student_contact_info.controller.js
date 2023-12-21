"use strict";

const StudentContactInfo = require("../models/student_educational_background.model");

exports.findAll = (req, res) => {
  StudentContactInfo.findAll((err, studentContactInfo) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: studentContactInfo });
  });
};

exports.create = (req, res) => {
  const new_studentContactInfo = new StudentContactInfo(req.body);

  if (
    req.body.constructor === Object &&
    Object.keys(req.body).length === 0
  ) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    StudentContactInfo.create(
      new_studentContactInfo,
      (err, studentContactInfo) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          status: 200,
          message: "Student contact info added successfully!",
          data: studentContactInfo,
        });
      }
    );
  }
};

exports.findById = (req, res) => {
  StudentContactInfo.findById(req.params.id, (err, studentContactInfo) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: studentContactInfo });
  });
};

exports.update = (req, res) => {
  if (
    req.body.constructor === Object &&
    Object.keys(req.body).length === 0
  ) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    StudentContactInfo.update(
      req.params.id,
      new StudentContactInfo(req.body),
      (err, studentContactInfo) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "Student contact info successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  StudentContactInfo.delete(req.params.id, (err, studentContactInfo) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "Student contact info successfully deleted",
      status: 200,
    });
  });
};
