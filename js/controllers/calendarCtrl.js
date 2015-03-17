/**********************************************************
calendarCtrl.js
controller has a "goHome" property that calls the 
"homepage" method from the factory "fact1"
***********************************************************/

paperApp.controller('calendarCtrl', function($scope, $location, fact1) {
    $scope.goHome = fact1.homepage;
   
   	// months property is to populate the drop down menu in calendar.html
    $scope.months = [
    	{ num: 1,  name: 'JANUARY 2015' },
    	{ num: 2,  name: 'FEBRUARY 2015' },
    	{ num: 3,  name: 'MARCH 2015' },
    	{ num: 4,  name: 'APRIL 2015' },
    	{ num: 5,  name: 'MAY 2015' },
    	{ num: 6,  name: 'JUNE 2015' },
    	{ num: 7,  name: 'JULY 2015' },
    	{ num: 8,  name: 'AUGUST 2015' },
    	{ num: 9,  name: 'SEPTEMBER 2015' },
    	{ num: 10, name: 'OCTOBER 2015' },
    	{ num: 11, name: 'NOVEMBER 2015' },
    	{ num: 12, name: 'DECEMBER 2015' }
    ];
})