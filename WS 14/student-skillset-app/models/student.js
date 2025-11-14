const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  guardianPhone: { type: String, default: null },
  skills: { type: [String], default: [] },
});

module.exports = mongoose.model("Student", studentSchema);
