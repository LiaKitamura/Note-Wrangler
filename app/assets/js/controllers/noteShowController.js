angular.module('NoteWrangler')
  .controller('NoteShowController',
    ['Note', '$scope', '$routeParams', '$location',
      function(Note, $scope, $routeParams, $location){
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

        // since we are using our custom service we know longer need '/notes/'+
        // Note.get($routeParams.id).success(function(data){
        //   $scope.data = data;
        // });

        // since we are using $resource
        $scope.data = Note.get({ id: $routeParams.id});

        $scope.deleteNote = function(note){
          // $http({method: "DELETE", url: "notes/"+note.id})
          Note.remove({id: note.id});
            // .success(function(data){
            //   console.log(data);
            // })
            // .error(function(data){
            //   console.log("ERROR: "+data);
            // });
          $location.path('/notes/');
        };

  }]);

// remember to add this script in the main index.html page
