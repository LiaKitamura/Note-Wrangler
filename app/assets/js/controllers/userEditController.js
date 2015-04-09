angular.module('NoteWrangler').controller('UserEditController', ['User', '$scope', '$routeParams', '$location', function(User, $scope, $routeParams, $location){
  $scope.isSubmitting = false;
  $scope.isEdit = true;

  $scope.user = User.get({ id: $routeParams.id });

  $scope.saveUser = function(user){
    $scope.isSubmitting = true;
    user.$update();

    $location.path("/users/"+user.id)
  }

}]);
