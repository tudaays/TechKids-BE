var myAngular = angular.module("myAngular", []);

myAngular.controller("myController", ["$scope", function($scope){
  $scope.records = [
    {
      name : "Dzung",
      age : 99,
      facebook : "Dzung",
      password : "dedede"
    },{
      name : "Dzung",
      age : 99,
      facebook : "Dzung",
      password : "dedede"
    },{
      name : "Dzung",
      age : 99,
      facebook : "Dzung",
      password : "dedede"
    },{
      name : "Dzung",
      age : 99,
      facebook : "Dzung",
      password : "dedede"
    }
  ]

  $scope.delete = function (index){
    $scope.records.splice(index, 2);
  }
}])
