/**********************************************************
calendar.js
Vanilla javascript for canvas drawing in the calendar.html file
***********************************************************/


document.title = "Paper Print | Calendars";
var canvas = document.querySelector('canvas');                      // canvas & context variable
var context = canvas.getContext('2d');
var printButton = document.querySelector(".print");                 // get print button in variable for click events
var calMenu = document.querySelector('select');                     // calendar selection drop down menu
var calData = [
    { name: 'JANUARY 2015',   numdays: 31, first: 4 },              // first: 0-6 is SUN - MON, serves as x distance multiplier
    { name: 'FEBRUARY 2015',  numdays: 28, first: 0 },              // of where to draw the day number text on calendar
    { name: 'MARCH 2015',     numdays: 31, first: 0 },
    { name: 'APRIL 2015',     numdays: 30, first: 3 },
    { name: 'MAY 2015',       numdays: 31, first: 5 },
    { name: 'JUNE 2015',      numdays: 30, first: 1 },
    { name: 'JULY 2015',      numdays: 31, first: 3 },
    { name: 'AUGUST 2015',    numdays: 31, first: 6 },
    { name: 'SEPTEMBER 2015', numdays: 30, first: 2 },
    { name: 'OCTOBER 2015',   numdays: 31, first: 4 },  
    { name: 'NOVEMBER 2015',  numdays: 30, first: 0 },
    { name: 'DECEMBER 2015',  numdays: 31, first: 2 }
];
var dayData = [                                                     // array of the names of the 7 days 
    { name: 'SUNDAY' },
    { name: 'MONDAY' },
    { name: 'TUESDAY' },
    { name: 'WEDNESDAY' },
    { name: 'THURSDAY' },
    { name: 'FRIDAY' },
    { name: 'SATURDAY' }
];

calMenu.addEventListener('change', function(e) {                    // everytime user selects a different month...
    context.clearRect(0,0, canvas.width, canvas.height);            // clear canvas
    drawCalendarTitle(e.target.value);                              // draw title (jan, feb, mar, etc...)
    drawCalendarHeader();                                           // draw the SUN-SAT header
    drawCalendarGrid();                                             // draw calendar grid
    drawDays(e.target.value);                                       // draw individual day numbers
})

// by default on page load draw January
drawCalendarTitle(1);           
drawCalendarHeader();
drawCalendarGrid();
drawDays(1);

/*** Draw the calendar title (Jan, Feb, Mar, etc...) ***/
function drawCalendarTitle(num) {
    var title = calData[num-1].name;        // store name of month
    context.save();                         // save context
    context.translate(1000, 660);           // move context to this location
    context.rotate(90 * Math.PI/180);       // rotate by 90 degrees
    context.textAlign = "center";           // center around x=0 of the newly rotated context
    context.font = 'italic 80pt Calibri';   
    context.fillText(title, 0, 80);         // write out name of month
    context.restore();                      // restore context
}

/*** Draw the calendar header (SUN - SAT) ***/
function drawCalendarHeader () {
    var headerRectX = 0;                                          // the rectangles start at x = 0
    var headerRectTextX = 87;                                     // the rectangle text starts at x = 87
    
    context.save();
    context.translate(880, 50);
    context.rotate(90 * Math.PI/180);   
    context.strokeStyle = "black";

    for (var i = 0; i < 7; i++) {                                 // iterate through dayData array and write out the 7 days
        context.strokeRect(headerRectX, 0, 175, 50);
        context.textAlign = "center";
        context.font = 'italic 20pt Calibri';
        context.fillText(dayData[i].name, headerRectTextX, 34);
        headerRectX += 175;
        headerRectTextX += 175;
    }
    context.restore();
}

/*** Draw the calendar grid ***/
function drawCalendarGrid () {
    var gridRectX = 0;                  // grid (x,y) starts at (0,0)
    var gridRectY = 0;
    var row = 0;                        // we'll want 6 total rows (0 - 5)
    
    context.save();
    context.translate(830, 50);
    context.rotate(90 * Math.PI/180);   
    context.strokeStyle = "black";

    for (var i = 0; i < 7; i++) {                               // iterate through 0-6 to draw 7 squares per row
        context.strokeRect(gridRectX, gridRectY, 175, 133);
        gridRectX += 175;                                       // each iteration, move to next x position in row

        if ( i == 6 && row < 5) {                               // after the 6th day (SAT) is drawn and haven't reached 6th row
            i = -1;                                             // reset i, it'll increment to 0 after this if statement
            row ++;                                             // keep incrementing row counter variable
            gridRectX = 0;                                      // reset x to 0
            gridRectY += 133;                                   // increment y down by 133
        }
    }
    context.restore();
}

/*** Draw the calendar day numbers ***/
function drawDays (num) {
    var numDays  = calData[num-1].numdays;                      // get number of days in the month
    var xDistanceMultiplier = calData[num-1].first;             // get the x distance multiplier
    var yDistance = 28;                                         // initialize y distance to 28
    var dayText = 1;                                            // first day is '1'

    context.save();
    context.translate(830, 50);
    context.rotate(90 * Math.PI/180);   
    context.strokeStyle = "black";
    context.font = 'italic 20pt Calibri';
    
    for ( var i = 0; i < numDays; i++ ) {                       // iterate through # of days in month
        context.fillText( dayText, (175 * xDistanceMultiplier) + 10, yDistance);    // draw the number in calendar
                
        if ( xDistanceMultiplier === 6 ) {                      // if in "SAT" column, move on to next row
            xDistanceMultiplier = 0;                            // reset multiplier to 0
            yDistance += 133;                                   // increment y distance down one row by 133
        }
        else {  
            xDistanceMultiplier++;                              // else keep incrementing distance multiplier
        }       

        dayText++;                                              // increment day number text
    }

    context.restore();
}

/* PRINTING */

// function to call browser's print dialog box
function print2 () {
    window.print();
};

// call print on page load, delay to allow drop down menu to populate
window.onload = (function() {
    setTimeout( function () { 
        print2();
    }, 300);
})();

// set click event handler for print button
printButton.addEventListener("click", print2);











