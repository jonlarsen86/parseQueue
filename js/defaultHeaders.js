var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'PxmP7oA46jwy0MapYNdFcVm4qBjEghmj7edCesXj', 'X-Parse-REST-API-Key': 'gZID9tUKK111g0QI2DizMuJxELPlw4R443od8okQ'};
			return config;
		}
	};
});