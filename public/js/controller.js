var controllers = angular.module('controllers', []);

var config = {
  headers: {
    "Consumer-Name": "Smart-ui-angularjs",
    "Request-Id": "smartui0-0000-0000-0000-postman00000",
    "Locale": "hu-HU"
  }
};

controllers.controller('lotteryController', function ($scope, $http) {
  $scope.numbers = [];
  $scope.retrieveFiveOutOfNinety = function () {
    $http.get('http://localhost:8080/retrieve/lottery/five-out-of-ninety/numbers?generatorType=experimental', config).then(function (response) {
      $scope.numbers = response.data.generatedNumbers;
    });
  }
  $scope.retrieveSixOutOfFortyFive = function () {
    $http.get('http://localhost:8080/retrieve/lottery/six-out-of-forty-five/numbers', config).then(function (response) {
      $scope.numbers = response.data.generatedNumbers;
    });
  }
  $scope.retrieveScandinavian = function () {
    $http.get('http://localhost:8080/retrieve/lottery/scandinavian/numbers', config).then(function (response) {
      $scope.numbers = response.data.generatedNumbers;
    });
  }
  $scope.retrieveJoker = function () {
    $http.get('http://localhost:8080/retrieve/lottery/joker/numbers', config).then(function (response) {
      $scope.numbers = response.data.generatedNumbers;
    });
  }
})