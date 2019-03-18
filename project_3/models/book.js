const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: { type: String, required: true },
  architect: { type: String, required: true },
  neighborhood: String,
  image: String,
  description: String,
  year: String,
  date: { type: Date, default: Date.now },
  saved: {type: Boolean, default: false}
});

const Building = mongoose.model("Building", buildingSchema);

module.exports = Building;
