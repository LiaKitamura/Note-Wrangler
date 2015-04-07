angular.module('NoteWrangler')
  .controller('NoteEditController',
    ['Note', '$scope', '$routeParams', '$location',
      function(Note, $scope, $routeParams, $location){
        $scope.isSubmitting = false;
        $scope.isEdit = true;
        // var controller = this;
        // $http({ method: 'GET', url: '/notes'}).success(function(data){
        //   controller.notes = data;
        // });

        // shorthand for that is:
        // _this = this;
        // $http.get('/notes').success(function(data){
        //   _this.data = data;
        // });

        // with scope we don't even need to use this
        // $http.get('/notes/'+ $routeParams.id).success(function(data){
        //   $scope.data = data;
        // });

        $scope.data = Note.get({id: $routeParams.id})

        $scope.saveNote = function(data){
          $scope.isSubmitting = true;
          // $http({ method: "PUT", url: '/notes/'+ note.id, data: note })
          //   .success(function(data){
          //     console.log("SUCCESS" + data);
          //     $scope.isSubmitting = false;
          //   }).error(function(data){
          //     console.log("Error" + data);
          //     $scope.isSubmitting = false;
          //   });
          data.$update();
          $location.path("/notes/"+note.id);
        }

    }]);

// remember to add this script in the main index.html page
