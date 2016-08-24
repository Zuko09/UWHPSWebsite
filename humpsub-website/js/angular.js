var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
    $scope.title = "The Team";
    $scope.roster = [
        subteam1 = {
            name : 'Hull Team',
            members : [
              {
                name : 'Jack Gentsch'
              },
              {
                name : 'Joe Joe Jimenz'
              },
              {
                name : 'Aman Arya'
              },
              {
                name : 'Connor Moen'
              }
            ]
        },
        subteam2 = {
            name : 'Fin Team',
            members : [
              {
                name : 'Jack Gentsch'
              },
              {
                name : 'Joe Joe Jimenz'
              },
              {
                name : 'Aman Arya'
              },
              {
                name : 'Connor Moen'
              }
            ]
        },
        subteam3 = {
            name : 'Electronics Team',
            members : [
              {
                name : 'Jack Gentsch'
              },
              {
                name : 'Joe Joe Jimenz'
              },
              {
                name : 'Aman Arya'
              },
              {
                name : 'Connor Moen'
              }
            ]
        },
        subteam4 = {
            name : 'Human Team',
            members : [
              {
                name : 'Jack Gentsch'
              },
              {
                name : 'Joe Joe Jimenz'
              },
              {
                name : 'Aman Arya'
              },
              {
                name : 'Connor Moen'
              }
            ]
        }
    ];

    $scope.display = $scope.roster;

    $scope.reset = function() {
        for(var i=0; i < $scope.roster.length; i++) {
            $scope.display[i] = $scope.roster[i];
        }
    };

    $scope.reset();

    $scope.show_subsection = function(section){
        var len = $scope.roster[section].members.length;
        console.log("roster"+$scope.roster);
        for(var i=0; i < len; i++) {
            $scope.display[i] = $scope.roster[section].members[i];
            console.log($scope.roster[0].members);
            console.log($scope.display);
        }

    };

});
