angular.module("app").controller("MyCtlr", function($scope){
    $scope.title = "My View";
})
.directive('myDirective', function() {
  return {
    template: 'My Directive Text'
  };
});
