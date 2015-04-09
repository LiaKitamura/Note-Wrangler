angular.module('NoteWrangler').controller('NoteCreateController', ['Note', '$scope', '$routeParams', '$location', function(Note, $scope, $routeParams, $location){
  $scope.isSubmitting = false;
  $scope.isNew = true;

  $scope.note = new Note();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    // $http({ method: "POST", url: '/notes/', data: note })
    note.$save();
    $scope.isSubmitting = false;
    $location.path("/notes/"+note.id);
  }

}]);

// remember to add this script in the main index.html page
