"use strict";

const Event = require("../models/event.model");

exports.findAll = (req, res) => {
  Event.findAll((err, events) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: events });
  });
};

exports.create = (req, res) => {
  const new_event = new Event(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Event.create(new_event, (err, event) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Event added successfully!",
        data: event,
      });
    });
  }
};

exports.findById = (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: event });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Event.update(
      req.params.id,
      new Event(req.body),
      (err, event) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "Event successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  Event.delete(req.params.id, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "Event successfully deleted",
      status: 200,
    });
  });
};
