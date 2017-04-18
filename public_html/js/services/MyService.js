//Angular Promise in a service

angular.module("app").factory('myService', function($q){
	return {
		getName: function(){
			var deferred = $q.defer();

			testAPI.getName().then(function(name){
				deferred.resolve(name);
			});

			return deferred.promise;
		}
	};
});