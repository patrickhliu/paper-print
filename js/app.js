/**********************************************************
app.js
The primary angular js controller file
***********************************************************/

var paperApp = angular.module("paperApp", ['ngRoute']);             // define a module called "paperApp", pass in 'ngRoute' for control of URL routes

paperApp.config(function($routeProvider) {                          // configure the $routeProvider
    $routeProvider
        .when('/', {                                                // for root '/', display the home page
            templateUrl: 'views/home.html',     
            controller: 'homeCtrl'
        })
        .when('/1', {                                               // for each paper choice, display the respective view
            templateUrl: 'views/graph.html',
            controller: 'graphCtrl'
        })
        .when('/2', {
            templateUrl: 'views/birthday.html',
            controller: 'birthdayCtrl'
        })
        .when('/3', {
            templateUrl: 'views/lined.html',
            controller: 'linedCtrl'
        })
        .when('/4', {
            templateUrl: 'views/calendar.html',
            controller: 'calendarCtrl'  
        })
        .otherwise({
            redirectTo: '/'
        });
});
