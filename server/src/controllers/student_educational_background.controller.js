"use strict";

const StudentEducationalBackground = require("../models/student_educational_background.model");

exports.findAll = (req, res) => {
  StudentEducationalBackground.findAll((err, educationalBackground) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: educationalBackground });
  });
};

exports.create = (req, res) => {
  const new_educationalBackground = new StudentEducationalBackground(req.body);

  if (
    req.body.constructor === Object &&
    Object.keys(req.body).length === 0
  ) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    StudentEducationalBackground.create(
      new_educationalBackground,
      (err, educationalBackground) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          status: 200,
          message: "Educational background added successfully!",
          data: educationalBackground,
        });
      }
    );
  }
};

exports.findById = (req, res) => {
  StudentEducationalBackground.findById(
    req.params.id,
    (err, educationalBackground) => {
      if (err) {
        res.send(err);
      }
      res.json({ status: 200, data: educationalBackground });
    }
  );
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
    StudentEducationalBackground.update(
      req.params.id,
      new StudentEducationalBackground(req.body),
      (err, educationalBackground) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "Educational background successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  StudentEducationalBackground.delete(
    req.params.id,
    (err, educationalBackground) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        message: "Educational background successfully deleted",
        status: 200,
      });
    }
  );
};
