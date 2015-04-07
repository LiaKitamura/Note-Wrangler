angular.module('NoteWrangler').controller('UserEditController', ['User', '$scope', '$routeParams', '$location', function(User, $scope, $routeParams, $location){
  $scope.isSubmitting = true;
  $scope.isEdit = true;

  $scope.data = User.get({ id: $routeParams.id })

  $scope.saveUser = function(user){
    $scope.isSubmitting = true;
    user.$update();
    $location.path("/user/"+user.id)
  }

}]);
