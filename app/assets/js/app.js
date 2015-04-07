(function(){

  // 1. Start the application. Don't forget to add ng-app="NoteWrangler" in index.html file
    // notice we are not saving it to a variable anymore. this is bad practice. instead we are chaining stuff together

  angular.module('NoteWrangler', ['ngRoute', 'ngResource']) // And add ngRoute dependency. which we have downloaded into our vendor folder

    // ngRoute gives us this routeProvider object
    .config(function($routeProvider){
      $routeProvider
        .when('/notes', {
          templateUrl:'/assets/templates/pages/notes/index.html', // goes with ng-view in views/index.html
          controller: 'NotesIndexController',
          // controllerAs: 'notes' // we don't need this anymore since we are now using the $scope
        })
        // this is the more specific route so we put it first before the /notes/:id
        .when('/notes/new', { // the : means whatever comes after the colon is the variable route
          templateUrl:'/assets/templates/pages/notes/edit.html',
          controller: 'NoteCreateController',
        })
        .when('/notes/:id', { // the : means whatever comes after the colon is the variable route
          templateUrl:'/assets/templates/pages/notes/show.html',
          controller: 'NoteShowController',
        })
        .when('/notes/:id/edit', { // the : means whatever comes after the colon is the variable route
          templateUrl:'/assets/templates/pages/notes/edit.html',
          controller: 'NoteEditController',
        })
        .when('/users', {
          templateUrl:'/assets/templates/pages/users/index.html',
          controller: 'UsersIndexController',
        }) // now only need the one ng-view to render both pages
        .when('/users/new', {
          templateUrl:'/assets/templates/pages/users/edit.html',
          controller: 'UserCreateController',
        })
        .when('/users/:id', {
          templateUrl: '/assets/templates/pages/users/show.html',
          controller: 'UserShowController',
        })
        .when('/users/:id/edit', {
          templateUrl: '/assets/templates/pages/users/edit.html',
          controller: 'UserEditController'
        })
        .otherwise({redirectTo: '/notes'}); // usually redirects to a 404 page.
    });

})();
