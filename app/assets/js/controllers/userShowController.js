angular.module('NoteWrangler')
  .controller('UserShowController',
    ['User', '$scope', '$routeParams', '$location',
      function(User, $scope, $routeParams, $location){

        $scope.data = User.get({ id: $routeParams.id });

        $scope.deleteUser = function(user){
          User.remove({ id: user.id });

          $location.path('/users/');
        };
      }]);
