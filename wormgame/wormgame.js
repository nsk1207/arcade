// REST API implemented in Node.js with Express framework and MongoDB to store player scores:


const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/playerScores', { useNewUrlParser: true });

// Define player score schema
const playerScoreSchema = new mongoose.Schema({
  name: String,
  score: Number
});

// Create player score model
const PlayerScore = mongoose.model('PlayerScore', playerScoreSchema);

// Add player score endpoint
app.post('/playerScores', (req, res) => {
  const playerScore = new PlayerScore({
    name: req.body.name,
    score: req.body.score
  });
  playerScore.save((err, score) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(score);
  });
});

// Get all player scores endpoint
app.get('/playerScores', (req, res) => {
  PlayerScore.find({}, (err, scores) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(scores);
  });
});

// Get player score by name endpoint
app.get('/playerScores/:name', (req, res) => {
  PlayerScore.findOne({ name: req.params.name }, (err, score) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(score);
  });
});
