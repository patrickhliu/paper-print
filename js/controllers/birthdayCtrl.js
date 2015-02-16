// controller has a property that gets goHome() function from factory "fact1"

paperApp.controller("birthdayCtrl", function($scope, $location, fact1) {
    $scope.goHome = fact1.homepage;
});