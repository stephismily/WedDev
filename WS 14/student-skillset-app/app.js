const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const Student = require("./models/student");
const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Atlas connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error(err));

// ----------- ROUTES ----------- //

// home
app.get("/", (req, res) => res.render("index"));

// add student (GET)
app.get("/addStudent", (req, res) => res.render("add"));

// add student (POST)
app.post("/addStudent", async (req, res) => {
  const { rollNumber, name, guardianPhone, skills } = req.body;
  const skillsArray = Array.isArray(skills) ? skills : skills ? [skills] : [];

  await Student.create({
    rollNumber,
    name,
    guardianPhone: guardianPhone || null,
    skills: skillsArray,
  });

  res.redirect("/");
});

// delete student
app.get("/deleteStudent", (req, res) => res.render("delete"));
app.post("/deleteStudent", async (req, res) => {
  await Student.deleteOne({ rollNumber: req.body.rollNumber });
  res.redirect("/");
});

// update student: search
app.get("/updateStudent", (req, res) => res.render("update_search"));
app.post("/updateStudent/search", async (req, res) => {
  const student = await Student.findOne({
    rollNumber: req.body.rollNumber,
  }).lean();
  res.render("update", { student });
});

// update student: update form
app.post("/updateStudent", async (req, res) => {
  const { rollNumber, name, guardianPhone, skills } = req.body;
  const skillsArray = Array.isArray(skills) ? skills : skills ? [skills] : [];

  await Student.updateOne(
    { rollNumber },
    {
      $set: { name, guardianPhone: guardianPhone || null, skills: skillsArray },
    }
  );
  res.redirect("/");
});

// display student by rollNo
app.get("/displayStudent", (req, res) => res.render("display_search"));
app.post("/displayStudent", async (req, res) => {
  const student = await Student.findOne({
    rollNumber: req.body.rollNumber,
  }).lean();
  res.render("display", { student });
});

// search students by skill (pattern)
app.get("/skillStudent", (req, res) => res.render("skill_search"));
app.post("/skillStudent", async (req, res) => {
  const regex = new RegExp(req.body.skillPattern, "i");
  const students = await Student.find({
    skills: { $elemMatch: { $regex: regex } },
  }).lean();
  res.render("skill_results", {
    students,
    skillPattern: req.body.skillPattern,
  });
});

// display all day scholars
app.get("/displayAll", async (req, res) => {
  const students = await Student.find({
    $or: [{ guardianPhone: null }, { guardianPhone: "" }],
  });
  res.render("displayAll", { students });
});

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
