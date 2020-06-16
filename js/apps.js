var app = angular.module("planit", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.html"
  })
  .when("/conditions", {
    templateUrl : "conditions.html"
  })
  .when("/local-nurseries", {
    templateUrl : "local-nurseries.html"
  })
  .when("/plants", {
    templateUrl : "plants.html"
  });
});
