angular.module('NoteWrangler')
  .directive('nwMainNav', function(){
    return {
      restrict: "E",
      templateUrl: "/assets/templates/directives/nwMainNav.html",
      // our function is so small we are just creating a controller inline
      controller: function($scope, $location){
        $scope.isPage = function(name){
          return new RegExp(name).test($location.path());
          // regex starts and ends with /
          // / \/notes ($|/)/ /
        };
      },
    }
  });
