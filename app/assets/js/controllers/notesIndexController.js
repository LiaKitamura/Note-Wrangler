angular.module('NoteWrangler').controller('NotesIndexController',['Note', '$scope',function(Note, $scope){
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
  // $http.get('/notes').success(function(data){
  //   $scope.data = data;
  // });

  // now that we've made our own service we add it to the dependency and we can say Note.all
  // Note.all().success(function(data){
  //   $scope.data = data;
  // });

  // now that we are using $resource
  $scope.data = Note.query();
  
}]);

// remember to add this script in the main index.html page
