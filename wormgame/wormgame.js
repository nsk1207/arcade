// REST API implemented in Node.js with Express framework and MongoDB to store player scores:

// Explaination:
/*
The first line imports the Flask module.

Next, an instance of the Flask class is created and the variable app is assigned to it.

The line app = Flask(__name__) is creating a new Flask application instance. The 
__name__ argument passed to the Flask class is a Python predefined variable that gives the 
name of the current module, which is used to resolve resources relative to the module.

The line app.route('/player/<player_name>/score', methods=['POST']) is a decorator that specifies
 the URL route and the HTTP methods allowed for the route. In this case, the route is 
 /player/<player_name>/score and only POST requests are allowed, meaning that you can only 
 create a new score entry by sending a POST request to this URL. The <player_name> part of the 
 URL is a placeholder that can be any string and is passed as an argument to the function 
 defined below the decorator.

The function update_score takes in a player_name argument, which is the string that was passed 
in as part of the URL when the POST request was made. It also takes in a score argument, which 
is passed as a parameter in the body of the POST request. The function then stores the score for
the specified player in a Python dictionary called scores.

Finally, the line if __name__ == '__main__': is a common Python idiom that checks if the script 
is being run as the main program and not imported as a module. If it's being run as the main 
program, the line app.run() starts the Flask development server, allowing the API to be 
accessible to client applications.
*/

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
