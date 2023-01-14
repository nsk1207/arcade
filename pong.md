<center>
<html>
<head>
  <title>Ping Pong</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div id="game">
    <div id="paddle-left"></div>
    <div id="paddle-right"></div>
    <div id="ball"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
</center>

<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
    <style>
#game {
  width: 500px;
  height: 300px;
  background-color: #5A5A5A;
  position: relative;
}
#paddle-left, #paddle-right {
  width: 10px;
  height: 50px;
  position: absolute;
  background-color: #fff;
}
#paddle-left {
  left: 10px;
}
#paddle-right {
  right: 10px;
}
#ball {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
}
; 
    </style>

<script>
var ball = document.getElementById("ball");
var paddleLeft = document.getElementById("paddle-left");
var paddleRight = document.getElementById("paddle-right");

// Set the initial position of the ball
ball.style.left = "250px";
ball.style.top = "150px";

// Add event listeners for the paddle movement
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 87) {
    paddleLeft.style.top = paddleLeft.offsetTop - 10 + "px";
  } else if (event.keyCode === 83) {
    paddleLeft.style.top = paddleLeft.offsetTop + 10 + "px";
  }
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 38) {
    paddleRight.style.top = paddleRight.offsetTop - 10 + "px";
  } else if (event.keyCode === 40) {
    paddleRight.style.top = paddleRight.offsetTop + 10 + "px";
  }
});
</script>