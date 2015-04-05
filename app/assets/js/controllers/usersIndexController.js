angular.module('NoteWrangler')
  .controller('UsersIndexController',
    ['User', '$scope',
      function(User, $scope){
        $scope.data = User.query();
      }]);
