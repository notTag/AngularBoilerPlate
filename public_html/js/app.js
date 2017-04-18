/* global angular */
var app = angular.module('app', ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "views/myView.html"
            })
            .when("/myView", {
                templateUrl: "views/myView.html"
            });

    $locationProvider.html5Mode(true);
});
