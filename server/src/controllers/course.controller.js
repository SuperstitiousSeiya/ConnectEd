"use strict";

const Course = require("../models/course.model");

exports.findAll = (req, res) => {
  Course.findAll((err, courses) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: courses });
  });
};

exports.create = (req, res) => {
  const new_course = new Course(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Course.create(new_course, (err, course) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Course added successfully!",
        data: course,
      });
    });
  }
};

exports.findById = (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: course });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Course.update(req.params.id, new Course(req.body), (err, course) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        message: "Course successfully updated",
        status: 200,
      });
    });
  }
};

exports.delete = (req, res) => {
  Course.delete(req.params.id, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "Course successfully deleted",
      status: 200,
    });
  });
};
