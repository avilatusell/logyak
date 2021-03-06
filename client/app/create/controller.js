
function CreateExcursionCtrl ($scope, $rootScope, $location, DataExcursionService){
		$scope.formData = {};
		$rootScope.bgId = 'backgroundSubpages';

	$scope.submit = function(formData){
		console.log(formData);

		DataExcursionService.createExcursion(formData)
			.then(function(resp) {
				console.log('Location: ', resp.headers('Location'))
				var id = resp.headers('Location').split('/')[3];

				$location.path('/excursion/' + id);
			}, function(err){
				console.log('error', err)
			});
	}
}

CreateExcursionCtrl.$inject = ['$scope', '$rootScope', '$location', 'DataExcursionService'];
module.exports = CreateExcursionCtrl;
