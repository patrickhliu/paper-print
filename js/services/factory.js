paperApp.factory("fact1", function($location) {                    // factory will return back a object with method to return to home page
    return {
        homepage: function () {
            $location.path('/');
        }
    }
});