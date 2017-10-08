document.addEventListener("DOMContentLoaded", function() {
    console.log('button ready!');

    context = document.querySelector('#drawingCanvas').getContext("2d");
    
    let canvas = document.querySelector('#drawingCanvas');

    let button = document.querySelector("input[name='saving']");
    button.addEventListener('click', function(event) {
        //event.preventDefault();
        context.save();
        let canvasData = canvas.toDataURL();
        console.log(canvasData)
        button.value = canvasData;
        //let newCanvas = document.createElement('img')
        //newCanvas.src = canvasData;
        //let render = document.querySelector('#render');
        //render.appendChild(newCanvas);
    })


});