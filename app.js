var noobAngular = angular.module("noobAngular", []);

noobAngular.controller("noobController", ["$scope", function($scope){
  $scope.qty = 1;
  $scope.cost = 1;
  $scope.inCurr = "USD";
  $scope.usdToForeign = {
    USD : 1,
    VND : 22300
  }
  $scope.currencies = ["USD", "VND"];

  $scope.convert = function(outCurr){
    var mount = $scope.qty * $scope.cost;
    return mount * $scope.usdToForeign[outCurr] / $scope.usdToForeign[$scope.inCurr];
  }

  $scope.incre = function(){
    $scope.qty++;
  }
}]);
