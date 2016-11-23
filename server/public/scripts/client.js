var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home',
    })
    .when('/basil', {
      templateUrl: '/views/templates/basil.html',
      controller: 'BasilController',
      controllerAs: 'basil',
    })
    .when('/matthias', {
      templateUrl: '/views/templates/matthias.html',
      controller: 'MatthiasController',
      controllerAs: 'matthias',
    })
    .when('/stonepaw', {
      templateUrl: '/views/templates/stonepaw.html',
      controller: 'StonepawController',
      controllerAs: 'stonepaw',
    })
    .otherwise({
      redirectTo: 'home',
    });

}]);

app.controller('HomeController', function () {
  console.log('home controller running');
  var self = this;
  self.message = "Click here to find out more about the Redwall series.";

});

app.controller('BasilController', function () {
  console.log('basil controller running');
  var self = this;
  self.message = 'Basil Stage Hare tut-tutted severely as her remarked to Ambrose Spike. "Tch, tch. Dreadful table manners. Just look at those three wallahs, kicking up a hullaballoo like that! Eating is a serious business".';

});
app.controller('MatthiasController', function () {
  console.log('matthias controller running');
  var self = this;
  self.message = "“Err, sorry Father Abbot. I tripped y'see. Trod on my Abbot, Father Habit. Oh dear, I mean....”";

});
app.controller('StonepawController', function () {
  console.log('stonepaw controller running');
  var self = this;
  self.message = "Stonepaw controller is the best!";

});
