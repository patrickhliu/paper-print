/**********************************************************
graphCtrl.js
controller has a "goHome" property that calls the 
"homepage" method from the factory "fact1"
***********************************************************/

paperApp.controller('graphCtrl', function($scope, $location, fact1) {
    $scope.goHome = fact1.homepage;
})