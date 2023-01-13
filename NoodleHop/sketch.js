function setup() {
    createCanvas(400, 400);
  }
background(255, 232, 255);

var brick = function(x, y) {
    stroke(0, 0, 0);
    strokeWeight(1.5);
    fill(146, 214, 107);
    rect(x, y, 100, 15, 50);
 };
 
var ghostBrick = function(x, y) {
    stroke(0, 0, 0);
    strokeWeight(1.5);
    fill(134, 190, 227);
    rect(x, y, 100, 15, 50);
 };
 
var movingBrick = function(x, y) {
    stroke(0, 0, 0);
    strokeWeight(1.5);
    fill(255, 204, 0);
    rect(x, y, 100, 15, 50);
 };


for (var i = 70; i < 485; i += 100) {
    var brickSpots = [10, 137, 264, 390];
    var brickX = brickSpots[round(random(0, 3))];
    var brickType = random(0, 100);
    if(brickType<=60) {
        brick(brickX, i);
    }
    if(brickType>60 && brickType<90) {
        ghostBrick(brickX, i);
    }
    if(brickType>=90) {
        movingBrick(brickX, i);
}
}
