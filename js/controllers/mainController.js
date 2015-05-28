var app = angular.module("parseQ")
.controller("mainController", function($scope, parseService) {

	$scope.enteredQuestion = "";

	$scope.getParseData = function() {
		parseService.getQuestion()
			.then(function(data) {
				console.log(data.data.results);
				$scope.returnedQuestions = data.data.results;
				$scope.enteredQuestion = "";
			})
	}

	$scope.postData = function() {
		parseService.postQuestion($scope.enteredQuestion)
			.then(function(data) {
				$scope.getParseData();
				// console.log(data.data.objectId);
				// $scope.testData = data.data.objectId;
		});
	}

	$scope.changeStatus = function(questionId) {
		parseService.updateQuestion(questionId).then(function(data) {
			$scope.getParseData();
		});
	}

	// $scope.getData = function() {
	// 	parseService.getQuestion($scope.testData)
	// 		.then(function(data) {
	// 			console.log(data.data.question);
	// 			$scope.returnedQuestions = data.data;
	// 	});
	// }		
})