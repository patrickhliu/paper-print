// JS for graph paper

var canvas = document.querySelector('.graph');                      // canvas & context variable
var context = canvas.getContext('2d');
var vert = 0;                                                       // vert/horiz initialize to 0 for the for-loops
var horiz = 0;
var w = 1020;                                                       // define width/heigt for for-loop control
var h = 1320;
var printButton = document.querySelector(".print");                 // get print button in variable for click events

document.title = "Graph Paper";

// draw vertical lines
context.beginPath();                                               
for (var horiz = 0; horiz <= h; horiz += 20) {
    
    context.moveTo(0, horiz);
    context.lineTo(w, horiz);
    context.lineWidth = 0.8;
}
context.strokeStyle = '#030521';
context.stroke();

// draw horizontal lines
context.beginPath();
for (var vert = 0; vert <= w; vert += 20) {
    
    context.moveTo(vert, 0);
    context.lineTo(vert, h);
    context.lineWidth = 0.8;
}
context.strokeStyle = '#030521';
context.stroke();

// print function, map it to click event for print button
function print2 () {
    window.print();
};

// call print function after canvas is drawn
print2();

// set click event handler
printButton.addEventListener("click", print2);