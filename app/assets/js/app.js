(function(){

  // 1. Start the application. Don't forget to add ng-app="NoteWrangler" in index.html file
    // notice we are not saving it to a variable anymore. this is bad practice. instead we are chaining stuff together

  angular.module('NoteWrangler', ['ngRoute']) // And add ngRoute dependency. which we have downloaded into our vendor folder

    // ngRoute gives us this routeProvider object
    .config(function($routeProvider){
      $routeProvider
        .when('/notes', {
          templateUrl:'/assets/templates/pages/notes/index.html', // goes with ng-view in views/index.html
          controller: 'NotesIndexController',
          controllerAs: 'notes'
        })
        .when('/users', {
          templateUrl:'/assets/templates/pages/users/index.html'
        }) // now only need the one ng-view to render both pages
        .otherwise({redirectTo: '/notes'}); // usually redirects to a 404 page.
    });

})();
