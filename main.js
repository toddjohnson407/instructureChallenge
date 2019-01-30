// Todd Johnson
// .js file for Instructure Challenge

let clockCanvas = document.querySelector("canvas");
let clockContext = clockCanvas.getContext("2d");

var horizontalLine = function(length, startingX, yCoord) {
  for(var i = 0; i < length; i++) {
    singleRect((startingX + (i * 20)), yCoord);
  }
}

var verticalLine = function(length, startingY, xCoord) {
  clockContext.fillStyle = "grey";
  for(var i = 0; i < length; i++) {
    singleRect(xCoord, (startingY + (i * 20)));
  }
}

var singleRect = function(x, y) {
  clockContext.fillStyle = "hsl(37, 10%, 90%)";
  clockContext.fillRect(x, y, 15, 15);
}

var produceClock = function() {

  // create number seven
  singleRect(30, 30);
  horizontalLine(4, 30, 10);
  verticalLine(9, 10, 110);

  // create colon
  singleRect(140, 90);
  singleRect(140, 130);

  // create number three
  horizontalLine(4, 160, 10);
  horizontalLine(3, 180, 90);
  horizontalLine(4, 160, 170);
  verticalLine(9, 10, 240);

  // create number two
  horizontalLine(5, 280, 10);
  horizontalLine(5, 280, 90);
  horizontalLine(5, 280, 170);
  verticalLine(3, 30, 360);
  verticalLine(3, 110, 280);

  // create letter "A"
  verticalLine(5, 90, 400);
  verticalLine(5, 90, 480);
  horizontalLine(3, 420, 70);
  horizontalLine(3, 420, 130);

  // create letter "M"
  verticalLine(6, 70, 520);
  verticalLine(6, 70, 600);
  singleRect(540, 90);
  singleRect(560, 110);
  singleRect(580, 90);

}

produceClock();
