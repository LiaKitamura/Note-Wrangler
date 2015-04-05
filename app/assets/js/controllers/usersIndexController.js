angular.module('NoteWrangler')
  .contoller('UsersIndexController',
  ['User', '$scope',
    function(User, $scope)
      $scope.data = User.query();
    ]);
