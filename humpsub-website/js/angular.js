var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope, $window) {
    // MISC DATA
    $scope.date = "November"
    // ROSTER STUFF
    $scope.roster = [
        subteam1 = {
            name : 'Hull Team',
            members : [
              {name : 'Jack Gentsch', link: "https://www.linkedin.com"},
              {name : 'Joe Joe Jimenz', link: "https://www.linkedin.com"},
              {name : 'Aman Arya', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"}
            ]
        },
        subteam2 = {
            name : 'Fin Team',
            members : [
              {name : 'Jack Gentsch', link: "https://www.linkedin.com"},
              {name : 'Joe Joe Jimenz', link: "https://www.linkedin.com"},
              {name : 'Aman Arya', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"}
            ]
        },
        subteam3 = {
            name : 'Electronics Team',
            members : [
              {name : 'Jack Gentsch', link: "https://www.linkedin.com"},
              {name : 'Joe Joe Jimenz', link: "https://www.linkedin.com"},
              {name : 'Aman Arya', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"}
            ]
        },
        subteam4 = {
            name : 'Human Team',
            members : [
              {name : 'Jack Gentsch', link: "https://www.linkedin.com"},
              {name : 'Joe Joe Jimenz', link: "https://www.linkedin.com"},
              {name : 'Aman Arya', link: "https://www.linkedin.com"},
              {name : 'Connor Moen', link: "https://www.linkedin.com"}
            ]
        }
    ];
    $scope.title = "The Team";
    $scope.display = $scope.roster;
    $scope.is_showing_members = false;
    $scope.current_section = -1;

    $scope.reset = function() {
        var temp = [];
        for(var i=0; i < $scope.roster.length; i++) {
            temp[i] = $scope.roster[i];
        }
        $scope.display = temp;
        $scope.title = "The Team";
        $scope.is_showing_members = false;
        $scope.current_section = -1;
    };

    $scope.reset();

    $scope.show_next = function(index, memeber){
        if($scope.is_showing_members == false) {
            var len = $scope.roster[index].members.length;
            var temp = [];
            console.log("roster"+$scope.roster);
            for(var i=0; i < len; i++) {
                temp[i] = $scope.roster[index].members[i];
            }
            $scope.title = $scope.roster[index].name;
            $scope.display = temp;
            $scope.is_showing_members = true;
        } else {
            $window.location.href = memeber.link;
        }
    };

});
