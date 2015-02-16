// controller for the home page

paperApp.controller("homeCtrl", function($scope, $http, $location) {
    
    $scope.category = [ { num: 1, name: ' 1. Graph Paper' },            // array "category" stores the different paper options
                        { num: 2, name: ' 2. Birthday Card'},
                        { num: 3, name: ' 3. Lined Paper'}
                      ];
    
    $scope.user = { choice: '' };                                      //  user.choice stores the user's number selection
    
    $scope.display = function() {
        $location.path('/' + $scope.user.choice);                      //  display function is called to change URL to the user's selection
    };
})