angular.module('NoteWrangler')
  .controller('NotesIndexController', ['$http', '$scope', function($http, $scope){
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
    $http.get('/notes').success(function(data){
      $scope.data = data;
    });

  }]);

// remember to add this script in the main index.html page
