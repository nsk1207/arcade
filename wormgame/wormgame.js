
const express = require('express');
const snakeFacts = [
    "Snakes have flexible jaws that allow them to swallow prey much larger than their head.",
    "Some species of snakes can live for more than 30 years.",
    "Snakes don't have eyelids, so they can't blink or close their eyes.",
    "Some species of snakes can fly, or at least glide, through the air.",
    "Snakes can sense their prey through vibrations in the ground.",
    "The black mamba is one of the fastest and most venomous snakes in the world.",
    "Some species of snakes give birth to live young, while others lay eggs.",
    "The king cobra is the largest venomous snake in the world, reaching lengths of up to 18 feet."
  ];
  
  // Define a route to handle GET requests to /snake-facts
  app.get('/snake-facts', (req, res) => {
    // Choose a random fact from the array
    const randomFact = snakeFacts[Math.floor(Math.random() * snakeFacts.length)];
    
    // Send the fact as a JSON response
    res.json({ fact: randomFact });
  });
  
  // Start the server
  app.listen(3000, () => {
    console.log('Snake Facts API listening on port 3000');
  });