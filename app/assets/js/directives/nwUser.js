angular.module('NoteWrangler').directive('nwUser', function(){
  return {
    restrict: 'E', // 'A' default is 'A'
    templateUrl: 'assets/templates/directives/nwUser.html',
    // if we want this child element to have its own scope
    scope: {
      name: '=', // this creates a two way binding (i.e data gets updated as it changes)
      site: '=',
      twitter_handle: '=',
      link: '='
    }
  }
});

// remember to add this script into the main index.html page
