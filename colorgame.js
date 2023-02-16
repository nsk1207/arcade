function setup() {
    createCanvas(400, 400);
}
  
  // Time bar movement
  var timeBarX = 0;

  // Winning and losing components
  var numCorrect = 0;
  
  var play=function() {

    background(255, 255, 255);

    // Random color generator
    var Red = 50+random(205);
    var Blue = 50+random(205);
    var Green = 50+random(205);

    // Random space generator
    var newX = [24, 74, 124, 174, 224, 274, 324, 374];
    var newY = [75, 135, 195, 255, 315, 375];
    var i = round(random(0, 7));
    var j = round(random(0, 5));
  
    draw= function() {

        // Time Bar
        noStroke();
        fill(Red, Blue, Green);
        rect(timeBarX, 0, 400, 50);
        stroke(255, 255, 255);
        strokeWeight(20);
        line(timeBarX-20, -20, timeBarX+70, 60);
        line(timeBarX+50, -20, timeBarX+140, 60);
        line(timeBarX+120, -20, timeBarX+210, 60);
        line(timeBarX+190, -20, timeBarX+280, 60);
        line(timeBarX+260, -20, timeBarX+350, 60);
        line(timeBarX+330, -20, timeBarX+420, 60);
        noStroke();
        fill(255, 255, 255);
        rect(timeBarX-400, 0, 400, 50);
        stroke(Red, Blue, Green);
        strokeWeight(2);
        line(0, 50, 400, 50);
        line(timeBarX, 0, timeBarX+400, 0);

        if(timeBarX<400) {
            timeBarX+=0.125;
        }

        // Circle generator
        for(var x=0; x<400; x+=50) {
            for(var y=45; y<400; y+=60) {
                fill(Red, Blue, Green);
                noStroke();
                ellipse(x+24, y+30, 40, 40);
            }
        }
        var imposter = function(x, y) {

            noStroke();
            fill(Red-20, Blue-20,Green-20);
            ellipse(newX[x], newY[y], 40, 40);

            // Differences found
            fill(255, 255, 255);
            rect(3, 7, 40, 40, 5);
            fill(Red, Blue, Green);
            textSize(40);
            text(numCorrect, 12, 40);

            // Finding differences
            mouseClicked = function() {
                var dx = mouseX - newX[i];
                var dy = mouseY - newY[j];
  
                if (dx*dx + dy*dy <= 400) {
                    numCorrect+=1;
                    play();
                }
            };
        };

        imposter(i, j);

    };
  };
  
  // Growing components
  var circle = 300;

  // Variables for color changing background
  var backgroundColor1 = 255;
  var backgroundColor2 = 0;
  var backgroundColor3 = 0;

  draw= function() {

    // Commands for color changing background
    background(backgroundColor1, backgroundColor2, backgroundColor3);

    if(backgroundColor1>250 && backgroundColor2<255) {
            backgroundColor2+=2;
            backgroundColor3-=2;
    }
    if(backgroundColor2>250 && backgroundColor3<255) {
            backgroundColor3+=2;
            backgroundColor1-=2;
    }
    if(backgroundColor3>250 && backgroundColor1<255) {
            backgroundColor1+=2;
            backgroundColor2-=2;
    }

    // Start button
    noStroke();
    fill(255, 255, 255);
    ellipse(200, 200, circle, circle);
    fill(backgroundColor1, backgroundColor2, backgroundColor3);
    triangle(125, 100, 325, 200, 125, 300);

    if(mouseX>100 && mouseX<400 && mouseY>100 && mouseY<400) {
        circle=315;
    }
    else {
        circle=300;
    }
    
    mousePressed = function() {
        if(mouseX>100 && mouseX<400 && mouseY>100 && mouseY<400) {
        play();
        }
    };
  };


  // API endpoints for adding a new score to the leaderboard, getting a list of the top scores, 
  // and getting a player's score. 
  
  const express = require('express');
  const mysql = require('mysql');
  
  const app = express();
  const port = 3000;
  
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'leaderboard'
  });
  
  app.use(express.json());
  
  app.post('/scores', (req, res) => {
    const { player_name, score } = req.body;
    const query = 'INSERT INTO leaderboard (player_name, score) VALUES (?, ?)';
    connection.query(query, [player_name, score], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error adding score');
      } else {
        res.status(201).send('Score added');
      }
    });
  });
  
  app.get('/scores/top', (req, res) => {
    const query = 'SELECT player_name, score FROM leaderboard ORDER BY score DESC LIMIT 10';
    connection.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error getting top scores');
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/scores/:player_name', (req, res) => {
    const { player_name } = req.params;
    const query = 'SELECT score FROM leaderboard WHERE player_name = ?';
    connection.query(query, [player_name], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error getting score');
      } else if (results.length === 0) {
        res.status(404).send('Player not found');
      } else {
        res.json(results[0]);
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  