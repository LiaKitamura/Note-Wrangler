angular.module('NoteWrangler')
  .controller('NoteEditController',
    ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
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
    $http.get('/notes/'+ $routeParams.id).success(function(data){
      $scope.data = data;
    });

    $scope.saveNote = function(note){
      $http({ method: "PUT", url: '/notes/'+ note.id, data: note }).success(function(data){
        console.log(data);
      }).error(function(data){
        console.log("Error");
        console.log(data);
      })
    }

  }]);

// remember to add this script in the main index.html page
