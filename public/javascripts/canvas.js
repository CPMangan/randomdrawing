document.addEventListener("DOMContentLoaded", function() {
  console.log('document ready!');
//set the canvas context so that you can draw on it. same as cxt on other things.
context = document.querySelector('#drawingCanvas').getContext("2d");

//define the canvas
let canvas = document.querySelector('#drawingCanvas');

let mouseDown = false;

canvas.addEventListener('mousedown', function(event) {
  mouseDown = true;
  console.log(mouseDown);
})
canvas.addEventListener('mouseup', function(event) {
  mouseDown = false;
  console.log(mouseDown);
})

  canvas.addEventListener('mousemove', function(event){
     //get the position of the canvas
      function getPosition(element) {
        let xPos = element.offsetLeft;
        let yPos = element.offsetTop;
        return { xPos, yPos }
        console.log( xPos, yPos )
      }
   
    getPosition(canvas);
    //create a variable for the brush size
    let brushSize = 5;
    //draw only if the mouse is down
    if (mouseDown === true) {
      //get the mouse position
      let mouseX = event.offsetX;
      let mouseY = event.offsetY;
      //show mouse position
      //console.log(mouseX, mouseY);
      context.fillStyle = "blue";
      context.fillRect(mouseX, mouseY, brushSize, brushSize);
    }
   

  });

});