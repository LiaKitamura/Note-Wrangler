angular.module('NoteWrangler')
  .factory('User', ['$resource',
    function UserFactory($resource){
      return $resource('/users/:id', { id: '@id'}, {
        update: {
          method: 'PUT'
        }
      });
    }]);
