"use strict";

const News = require("../models/news.model");

exports.findAll = (req, res) => {
  News.findAll((err, news) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: news });
  });
};


exports.create = (req, res) => {
  const new_news = new News(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    News.create(new_news, (err, news) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "News added successfully!",
        data: news,
      });
    });
  }
};

exports.findById = (req, res) => {
  News.findById(req.params.id, (err, news) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: news });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    News.update(
      req.params.id,
      new News(req.body),
      (err, news) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "News successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  News.delete(req.params.id, (err, news) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "News successfully deleted",
      status: 200,
    });
  });
};
