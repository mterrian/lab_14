var app = angular.module('catdogApp');



app.controller('catCtrl', function($scope){
		$scope.name = "Cat";
		$scope.likes = ['- the finer things', '- lounging', '- yarn']
});

app.controller('dogCtrl', function($scope){
		$scope.name = 'Dog';
		$scope.likes = ['- cat', '- having fun', '- eating garbage']
});

app.controller('winslowCtrl',function($scope){
		$scope.name = 'winslow',
		$scope.likes = ['being a real bastard']
});