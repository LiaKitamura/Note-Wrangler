angular.module('NoteWrangler').controller('UserCreateController', ['User', '$scope', '$routeParams', '$location', function(User, $scope, $routeParams, $location){
  $scope.isSubmitting = false;
  $scope.isNew = true;

  $scope.user = new User();

  $scope.saveUser = function(user){
    $scope.isSubmitting = true;

    user.save();
    $scope.isSubmitting = false;
    $location.path("/users/"+user.id);
  }
}]);
