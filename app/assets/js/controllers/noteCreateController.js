angular.module('NoteWrangler')
  .controller('NoteCreateController',
    ['Note', '$scope', '$routeParams', '$location',
      function(Note, $scope, $routeParams, $location){
        $scope.isSubmitting = true;
        $scope.isNew = true;
        $scope.note = new Note();

        $scope.saveNote = function(note){
          $scope.isSubmitting = true;

          // $http({ method: "POST", url: '/notes/', data: note })
          note.save()
            .then(function(){
              $location.path("/notes/"+note.id);
              
            }).finally(function(){
              $scope.isSubmitting = false;
            });
        }

  }]);

// remember to add this script in the main index.html page
