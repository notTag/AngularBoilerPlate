angular.module("app").controller("MyCtlr", function($scope){
    $scope.title = "My View";
}).directive('myDirective', function() {
  return {
    scope: { name:'@' },  
    template: '{{name}}<div ng-transclude></div>',
    transclude: true,  //includes text between directive's tags. 
    restrict: 'AEC'
  };
});