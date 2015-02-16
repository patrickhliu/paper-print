// JS for lined paper

var canvas = document.querySelector('.lined');                         // canvas/context 
var context = canvas.getContext('2d');
var w = 1020;                                                          // set height/width for for-loop control
var h = 1320;
var printButton = document.querySelector(".print");                    // print button variable for click event handler

document.title = "Lined Paper";

// draw the horizontal lines
context.beginPath();                                                
for (var horiz = 120; horiz <= h; horiz += 20) {    
    context.moveTo(0, horiz);
    context.lineTo(w, horiz);
    context.lineWidth = 0.8;
}
context.strokeStyle = 'blue';
context.stroke();

// draw the pink margin line
context.beginPath();    
context.moveTo(160, 0);
context.lineTo(160, h);
context.lineWidth = 3;
context.strokeStyle = 'pink';
context.stroke();

// print function, map it to click event for print button
function print2 () {
    window.print();
};

// call print function after canvas is drawn
print2();

// set click event handler
printButton.addEventListener("click", print2);