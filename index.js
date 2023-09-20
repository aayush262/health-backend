const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ScenarioState = require('./models/ScenarioState'); // Import the ScenarioState model

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  
// Define a route to create a new Scenario State
app.post('/scenario-state', async (req, res) => {
  try {
    const { name, description, bpm, resp, temp, spo2, co2, ibp } = req.body;

    // Create a new ScenarioState document
    const scenarioState = new ScenarioState({
      name,
      description,
      bpm,
      resp,
      temp,
      spo2,
      co2,
      ibp,
    });

    // Save the ScenarioState document to the database
    await scenarioState.save();

    res.status(201).json(scenarioState);
  } catch (error) {
    console.error('Error creating Scenario State:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... (other routes and middleware)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

