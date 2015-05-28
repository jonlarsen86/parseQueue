var app = angular.module("parseQ")
.service("parseService", function($http, $q) {

	this.postQuestion = function(question) {
		return $http({
			method: "POST",
			url: "https://api.parse.com/1/classes/questions",
			data: {
				text: question,
				status: "red"
			}
		});
	}

	this.getQuestion = function() {
		return $http({
			method: "GET",
			url: "https://api.parse.com/1/classes/questions/"
		});
	}

	this.updateQuestion = function(objId) {
		return $http({
			method: "PUT",
			url: "https://api.parse.com/1/classes/questions/" + objId,
			data: {
				status: "yellow"
			}
		});
	}

	this.deleteQuestion = function(objId) {
		return $http({
			method: "DELETE",
			url: "https://api.parse.com/1/classes/questions/" + objId
		});
	}

})