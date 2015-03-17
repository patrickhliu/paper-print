/**********************************************************
factory.js
The factory will return an object with a method that 
returns user to home page return to home page.
***********************************************************/

paperApp.factory("fact1", function($location) {                    
    return {
        homepage: function () {
            $location.path('/');
        }
    }
});