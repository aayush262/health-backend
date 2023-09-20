const mongoose = require('mongoose');

const scenarioStateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bpm: {
    type: Number,
  },
  resp: {
    type: Number,
  },
  temp: {
    type: Number,
  },
  spo2: {
    type: Number,
  },
  co2: {
    type: Number,
  },
  ibp: {
    type: String,
  },
});

const ScenarioState = mongoose.model('ScenarioState', scenarioStateSchema);

module.exports = ScenarioState;
