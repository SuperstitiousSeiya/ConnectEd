"use strict";

const Announcement = require("../models/announcement.model");

exports.findAll = (req, res) => {
  Announcement.findAll((err, announcements) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: announcements });
  });
};

exports.create = (req, res) => {
  const new_announcement = new Announcement(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Announcement.create(new_announcement, (err, announcement) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Announcement added successfully!",
        data: announcement,
      });
    });
  }
};

exports.findById = (req, res) => {
  Announcement.findById(req.params.id, (err, announcement) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: announcement });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Announcement.update(
      req.params.id,
      new Announcement(req.body),
      (err, announcement) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "Announcement successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  Announcement.delete(req.params.id, (err, announcement) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "Announcement successfully deleted",
      status: 200,
    });
  });
};
