angular.module('NoteWrangler').directive('nwNote', function(){
  return {
    restrict: 'E', // 'A' default is 'A'
    templateUrl: 'assets/templates/directives/nwNote.html',
    // if we want this child element to have its own scope
    scope: {
      title: '=', // this creates a two way binding (i.e data gets updated as it changes)
      link: '=',
      description: '=',
      category: '@' // this will pass the data as a string
    }
  }
});

// remember to add this script into the main index.html page
