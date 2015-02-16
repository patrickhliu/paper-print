// JS for the birthday card

var printButton = document.querySelector('.print');               // store print button to variable
var canvas = document.querySelector(".birthdayp1");               // canvas & context for 1st page
var context = canvas.getContext("2d");
var can2 = document.querySelector(".birthdayp2");                 // canvas & context for 2nd page
var con2 = can2.getContext("2d");

document.title = "Happy Birthday";

// draw a half-way line for each page
context.beginPath();
context.moveTo(0,660);
context.lineTo(1020,660);
context.stroke();

con2.beginPath();
con2.moveTo(0,660);
con2.lineTo(1020,660);
con2.stroke();

// FRONT COVER
// squares for "HAPPY"
context.strokeStyle = 'black';
context.strokeRect(100, 720, 100,100);
context.strokeRect(100, 820, 100,100);
context.strokeRect(100, 920, 100,100);
context.strokeRect(100, 1020, 100,100);
context.strokeRect(100, 1120, 100,100);

// squares for "BIRTHDAY"
context.strokeRect(200, 1120, 100,100);
context.strokeRect(300, 1120, 100,100);
context.strokeRect(400, 1120, 100,100);
context.strokeRect(500, 1120, 100,100);
context.strokeRect(600, 1120, 100,100);
context.strokeRect(700, 1120, 100,100);
context.strokeRect(800, 1120, 100,100);

// purple candle stick
context.beginPath();
context.rect(300, 820, 500, 200);
context.fillStyle = '#72F558';
context.fill();
context.strokeStyle = 'black';
context.stroke();

// purple candle light rope
context.beginPath();
context.rect(800, 910, 50, 20);
context.fillStyle = 'black';
context.fill();

// purple candle flame
context.beginPath();
context.moveTo(900, 920);
context.quadraticCurveTo(870, 900, 850, 920);
context.quadraticCurveTo(870, 940, 900, 920);
context.closePath();
context.fillStyle = '#F2A73D';
context.fill();

// individual stripes
context.beginPath();
for (var x = 302; x < 800; x += 100 ) {
    context.moveTo(x, 822);
    context.lineTo(x + 100, 1018);
}
context.lineWidth = 4;
context.strokeStyle = '#387D2A';
context.stroke();

// save current context before rotation
context.save();

// #1 & #2 printout
context.translate(10,10);
context.rotate(90 * Math.PI/180);
context.translate(0,0);
context.font = '16pt Arial';
context.fillStyle = 'black';
context.fillText('1', 720, -160);
context.font = '16pt Arial';
context.fillStyle = 'black';
context.fillText('2', 1120, -860);

// restore context before rotation
context.restore();

// BACK COVER

// blue balloon rope
context.beginPath();
context.moveTo(100,100);
context.quadraticCurveTo(200, 200, 400, 100);
context.quadraticCurveTo(500, 50, 700, 100);
context.lineWidth = 4;
context.strokeStyle = 'black';
context.stroke();

// blue balloon
context.beginPath();
context.moveTo(900,100);
context.bezierCurveTo(900,100, 890,-50, 700,100);
context.bezierCurveTo(700,100, 890,250, 900,100);
context.fillStyle = '#8CD0D4';
context.fill();

// red balloon rope
context.beginPath();
context.moveTo(100,300);
context.quadraticCurveTo(200, 400, 400, 300);
context.quadraticCurveTo(500, 250, 700, 300);
context.lineWidth = 4;
context.strokeStyle = 'black';
context.stroke();
    
// red balloon
context.beginPath();
context.moveTo(900,300);
context.bezierCurveTo(900,300, 890,150, 700,300);
context.bezierCurveTo(700,300, 890,450, 900,300);
context.fillStyle = '#F03281';
context.fill();

// orange balloon rope
context.beginPath();
context.moveTo(100,500);
context.quadraticCurveTo(200, 600, 400, 500);
context.quadraticCurveTo(500, 450, 700, 500);
context.lineWidth = 4;
context.strokeStyle = 'black';
context.stroke();

// orange balloon
context.beginPath();
context.moveTo(900,500);
context.bezierCurveTo(900,500, 890,350, 700,500);
context.bezierCurveTo(700,500, 890,650, 900,500);
context.fillStyle = '#FFA229';
context.fill();

// INSIDE COVER HINTS & MESSAGE
con2.save();
con2.translate(10,10);
con2.rotate(90 * Math.PI/180);
con2.translate(0,0);

setTimeout(function() {
    con2.font = '50pt Indie Flower';
    con2.fillStyle = 'black';
    con2.fillText('Crossword Hints:', 50,-800);

    con2.font = '35pt Indie Flower';
    con2.fillText('#1 - feliz', 50, -600);
    con2.fillText('#2 - day you blow candles', 50, -400);
    con2.fillText('Another year older......',          750, -900);
    con2.fillText('Be your own light in life......',           750, -800);
    con2.fillText('It should be easy...', 750, -700);
    con2.fillText('There\'s plenty of candles !!!', 750, -600);
    con2.fillStyle = '#CC1620';
    con2.fillText('Happy Birthday !!!', 830, -50);
    con2.restore();

    // chocolate cake
    con2.fillStyle = '#694220';
    con2.fillRect(200, 900, 180, 225);

    // pink frosting stripe
    con2.beginPath();
    con2.moveTo(220,900);
    con2.lineTo(220,1125);
    con2.lineWidth = 10;
    con2.strokeStyle = 'pink';
    con2.stroke();

    // orange frosting stripe
    con2.beginPath();
    con2.moveTo(260,900);
    con2.lineTo(260,1125);
    con2.lineWidth = 10;
    con2.strokeStyle = 'orange';
    con2.stroke();

    // orange frosting stripe
    con2.beginPath();
    con2.moveTo(300,900);
    con2.lineTo(300,1125);
    con2.lineWidth = 10;
    con2.strokeStyle = '#8FE38A';
    con2.stroke();

    // purple frosting stripe
    con2.beginPath();
    con2.moveTo(340,900);
    con2.lineTo(340,1125);
    con2.lineWidth = 10;
    con2.strokeStyle = '#D68AE3';
    con2.stroke();

    // white frosting
    con2.beginPath();
    con2.moveTo(380,900);
    con2.bezierCurveTo(380,900,  320,937,  380,975);
    con2.bezierCurveTo(380,975,  320,1012,  380,1050);
    con2.bezierCurveTo(380,1050,  320,1087,  380,1125);
    con2.lineWidth = 0.1;
    con2.fillStyle = 'white';
    con2.fill();

    // blue candles
    con2.beginPath();
    con2.moveTo(380,910);
    con2.lineTo(420,910);
    con2.moveTo(380,950);
    con2.lineTo(420,950);
    con2.moveTo(380,990);
    con2.lineTo(420,990);
    con2.moveTo(380,1030);
    con2.lineTo(420,1030);
    con2.moveTo(380,1070);
    con2.lineTo(420,1070);
    con2.moveTo(380,1110);
    con2.lineTo(420,1110);
    con2.lineWidth = 16;
    con2.strokeStyle = '#35A4E8';
    con2.stroke();
    
    // print function, map it to click event for print button
    function print2 () {
        window.print();
    };

    // call print function after canvas is drawn
    print2();

    // set click event handler
    printButton.addEventListener("click", print2);
}, 500);










