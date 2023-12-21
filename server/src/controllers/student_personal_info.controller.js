"use strict";

const StudentPersonalInfo = require("../models/student_personal_info.model");

exports.findAll = (req, res) => {
  StudentPersonalInfo.findAll((err, personalInfo) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: personalInfo });
  });
};


exports.create = (req, res) => {
    const new_personalInfo = new StudentPersonalInfo(req.body);
    let userId = req.user.user.user_id;
  
    // Add user_id to the new_personalInfo object
    new_personalInfo.user_id = userId;
  
    // Check for blank fields
    const requiredFields = [
      'student_type',
      'lrn',
      'sex',
      'last_name',
      'first_name',
      'middle_name',
      'date_of_birth',
      'religion',
      'permanent_address',
      'postal_code',
      'current_address',
      'civil_status'
      // Add other required fields here
    ];
  
    const missingFields = requiredFields.filter(
      field => !new_personalInfo[field]
    );
  
    if (missingFields.length > 0) {
      res.status(400).json({
        status: 400,
        error: true,
        message: `Please provide values for the following required fields: ${missingFields.join(', ')}`
      });
      return;
    }
  
    // Proceed with creating personal information
    StudentPersonalInfo.create(new_personalInfo, (err, personalInfo) => {
      if (err) {
    return res.status(500).json({
          status: 500,
          error: true,
          message: err,

        });
      } else {
        res.status(200).json({
          error: false,
          status: 200,
          message: 'Personal information added successfully!',
          data: personalInfo
        });
      }
    });
  };
  
  

exports.findById = (req, res) => {

    let userId = req.user.user.user_id;
    if(req.user.user.user_type == "admin"){
        userId = req.params.id;
    }

  StudentPersonalInfo.findById(userId, (err, personalInfo) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: personalInfo });
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
    StudentPersonalInfo.update(
      req.params.id,
      new StudentPersonalInfo(req.body),
      (err, personalInfo) => {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "Personal information successfully updated",
          status: 200,
        });
      }
    );
  }
};

exports.delete = (req, res) => {
  StudentPersonalInfo.delete(req.params.id, (err, personalInfo) => {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "Personal information successfully deleted",
      status: 200,
    });
  });
};
