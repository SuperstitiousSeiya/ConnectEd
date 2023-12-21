"use strict";
const Employee = require("../models/employee.model");

exports.findAll = (req, res) => {
  Employee.findAll((err, employee) => {
    console.log("controller");
    if (err) {
      res.send(err);
    }
    console.log("res", employee);
    res.send({ status: 200, data: employee });
  });
};



exports.create = (req, res) => {
  const new_employee = new Employee(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(404)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Employee.create(new_employee, (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Employee added sucessfully!",
        data: employee,
      });
    });
  }
};

exports.findById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: employee });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please Provide all required field" });
  } else {
    Employee.update(req.params.id, new Employee(req.body), (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        message: "Employee successfully updated",
        status: 200,
      });
    });
  }
};

exports.delete = (req, res) =>{
    Employee.delete(req.params.id, (err, employee) =>{
        if(err){
            res.send(err);
        }
        res.json({error: false, message: "Employee successfully deleted", status: 200});
    })
}