const express = require("express");
const router = express.Router();
const master_students = require("../model/model");

//To get all the data-
router.get("/", async (req, res) => {
  try {
    const allStudntsData = await master_students.find();
    res.send(allStudntsData);
  } catch (error) {
    res.send("Error-->" + error);
  }
});

//To get an individual data-
router.get("/:id", async (req, res) => {
  try {
    const singleStudentData = await master_students.findById(req.params.id);
    res.send(singleStudentData);
  } catch (error) {
    res.send("Error-->" + error);
  }
});

//To post a data to the database-
router.post("/", async (req, res) => {
  console.log("RESPONSE body",res.body);
  const newstudent = new master_students({
    name: req.body.name,
    gender: req.body.gender,
    class: req.body.class,
  });
  try {
    const addNewStudent = await newstudent.save();
    res.send(addNewStudent);
  } catch (error) {
    console.log(error);
    res.send("Error-->" + error);
  }
});

//To update a student data-
router.patch("/:id", async (req, res) => {
  try {
    const getStudentWithId = await master_students.findById(req.params.id);

    getStudentWithId.name = req.body.name;
    getStudentWithId.gender = req.body.gender;
    getStudentWithId.class = req.body.class;
    const studentDataUpdated = await getStudentWithId.save();
    res.send(getStudentWithId);
  } catch (error) {
    res.send("Error-->" + error);
  }
});

//To delete a student data-
router.delete("/:id", async (req, res) => {
  try {
    const deleteThisStudent = await master_students.findByIdAndDelete(
      req.params.id
    );
    res.send(deleteThisStudent);
  } catch (error) {
    res.send("Error-->" + error);
  }
});

module.exports = router;
