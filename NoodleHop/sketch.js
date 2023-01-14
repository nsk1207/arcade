function setup() {
    createCanvas(400, 400);
  }

draw = function() {

    background(255, 232, 255);

    var brickY = 0;

    brick = function(x, y) {
        stroke(0, 0, 0);
        strokeWeight(1.5);
        fill(146, 214, 107);
        rect(x, brickY + y, 100, 15, 50);
    };
 
    ghostBrick = function(x, y) {
        stroke(0, 0, 0);
        strokeWeight(1.5);
        fill(134, 190, 227);
        rect(x, brickY + y, 100, 15, 50);
    };
 
    movingBrick = function(x, y) {
        stroke(0, 0, 0);
        strokeWeight(1.5);
        fill(255, 204, 0);
        rect(x, brickY + y, 100, 15, 50);
    };


    for (var i = 70; i < 485; i += 100) {
        const brickSpots = [10, 137, 264, 390];
        const brickX = brickSpots[round(random(0, 3))];
        const brickType = random(0, 100);
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

    if(brickY<1000) {
        brickY+=1;
    }

}