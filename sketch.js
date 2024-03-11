function setup() {
  createCanvas(600, 600);
  noStroke()
  background(187, 226, 137);
   for(x = 0; x < 120; x ++){
    drawFlower(random(0, width), random(0, height), 20)
  }
}

function draw() {}
 
   
  function drawFlower (xPos, yPos, size){
    fill(154, 177, 225);
    ellipse(xPos, yPos, size);
    ellipse(xPos - 15, yPos + 5, size);
    ellipse(xPos - 25, yPos - 5, size);
    ellipse(xPos - 17, yPos - 20, size);
    ellipse(xPos, yPos - 15, size);
    fill (255, 255, 176);
    ellipse(xPos - 12, yPos - 7, size);
  }

