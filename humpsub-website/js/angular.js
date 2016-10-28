(function() {
    'use strict';

    angular.module('app1', [])
    .controller('appController', appController);

    appController.$inject = ['$scope', '$window'];
    function appController($scope, $window) {

        // MISC DATA
        $scope.date = "November"

        // ROSTER STUFF
        $scope.roster = [
            {
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
            {
                name : 'Fin Team',
                members : [
                  {name : 'Jack Gentsch', link: "https://www.linkedin.com"},
                  {name : 'Joe Joe Jimenz', link: "https://www.linkedin.com"},
                  {name : 'Aman Arya', link: "https://www.linkedin.com"},
                  {name : 'Connor Moen', link: "https://www.linkedin.com"}
                ]
            },
            {
                name : 'Electronics Team',
                members : [
                  {name : 'Jack Gentsch', link: "https://www.linkedin.com"},
                  {name : 'Joe Joe Jimenz', link: "https://www.linkedin.com"},
                  {name : 'Aman Arya', link: "https://www.linkedin.com"},
                  {name : 'Connor Moen', link: "https://www.linkedin.com"}
                ]
            },
            {
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

        $scope.showSubteam = function(index, memeber){
            if($scope.is_showing_members == false) {
                $scope.showTheseDetails(index);
            } else {
                $window.location.href = memeber.link;
            }
        };
        $scope.showThisSubteam = function(index) {
            var len = $scope.roster[index].members.length;
            var temp = [];
            console.log("roster"+$scope.roster);
            for(var i=0; i < len; i++) {
                temp[i] = $scope.roster[index].members[i];
            }
            $scope.title = $scope.roster[index].name;
            $scope.display = temp;
            $scope.is_showing_members = true;
        }



        // SUBTEAM INFOGRAPHIC STUFF

        $scope.details = "details";
        $scope.glyph = "fa fa-ship fa-stack-1x text-primary";
        $scope.teamInfo = [
            {
                name : "The Hull Team",
                description : "It all starts with hydrodynamics. An innovative team optimizes the sub’s hull for unmatched performance.",
                glyph : "fa fa-ship fa-stack-1x text-primary",
                details : ""
            },
            {
                name : "The Controls Team",
                description : "Two words: slalom gates. This team of engineers enables the pilot to navigate the racecourse at the touch of a finger.",
                glyph : "fa fa-compass fa-stack-1x text-primary",
                details : ""
            },
            {
                name : "The Electronics Team",
                description : "An eccentric team of electrical engineers, computer scientists, and magicians develops the future of submarine control.",
                glyph : "fa fa-gamepad fa-stack-1x text-primary",
                details : ""
            },
            {
                name : "The Drivetrain Team",
                description : "A hardworking team of friction-fighters takes the power seamlessly from the pilot to the propeller.",
                glyph : "fa fa-cogs fa-stack-1x text-primary",
                details : ""
            },
            {
                name : "The Propulsion Team",
                description : "A sharp team of aeronautical and mechanical engineers designs the most efficient propeller known to man(power).",
                glyph : "glyphicon glyphicon-dashboard glyphicon-stack-1x text-primary",
                details : ""
            },
            {
                name : "The Divers",
                description : "An elite team of highly-trained pilots and support divers execute our underwater operations without a hitch.",
                glyph : "fa fa-street-view fa-stack-1x text-primary",
                details : ""
            }
        ]

        $scope.showTheseDetails = function(i) {
            $scope.showDetails = true;
            $scope.infopanelTitle = $scope.teamInfo[i].name;
            $scope.infopanelDetails = $scope.teamInfo[i].details;
            $scope.showThisSubteam(i);
        }

        $scope.isShowingSponsorPitch = false;
        $scope.isShowingMailingList = false;

        // three buttons
        $scope.showMailingList = function() {
            $scope.isShowingSponsorPitch = false;
            $scope.isShowingMailingList = true;
        }

        $scope.showSponsorPitch = function() {
            $scope.isShowingMailingList = false;
            $scope.isShowingSponsorPitch = true;

        }

        // Portfolio
        $scope.fullPortfolio = [
            {src : "img/portfolio/portfolio-1.jpg"},
            {src : "img/portfolio/portfolio-2.jpg"},
            {src : "img/portfolio/portfolio-3.jpg"},
            {src : "img/portfolio/portfolio-4.jpg"},
            {src : "img/portfolio/portfolio-5.jpg"},
            {src : "img/portfolio/portfolio-7.jpg"},
            {src : "img/portfolio/portfolio-8.jpg"},
            {src : "img/portfolio/portfolio-9.jpg"},
            {src : "img/portfolio/portfolio-10.png"},
            {src : "img/portfolio/portfolio-11.jpg"},
            {src : "img/portfolio/portfolio-12.jpg"},
            {src : "img/portfolio/portfolio-13.jpg"},
            {src : "img/portfolio/portfolio-14.jpg"}
        ];
        $scope.initialPortfolioSize = 8;
        $scope.portfolio = new Array();
        $scope.initializePortfolio = function() {
            $scope.portfolio = [];
            for(var i = 0; i < $scope.initialPortfolioSize; i++) {
                $scope.portfolio.push($scope.fullPortfolio[i]);
            }
        }
        $scope.initializePortfolio();
        $scope.isShowingMore = false;
        $scope.showMore = function() {
            $scope.isShowingMore = true;
            for(var i = $scope.initialPortfolioSize; i < $scope.fullPortfolio.length; i++) {
                $scope.portfolio.push($scope.fullPortfolio[i]);
            }
        }
        $scope.showLess = function() {
            $scope.isShowingMore = false;
            $scope.initializePortfolio();
        }
        // SPONSOR INFORMATION


        $scope.sponsorName = "";

        $scope.sponsor_count = 16;

        $scope.search_sponsors = "";

        $scope.sponsor_array_1 = ["img/hps-sponsors/sponsor1.png",
                                "img/hps-sponsors/sponsor2.png",
                                "img/hps-sponsors/sponsor3.png",
                                "img/hps-sponsors/sponsor4.png",
                                "img/hps-sponsors/sponsor5.png",
                                "img/hps-sponsors/sponsor6.png",
                                "img/hps-sponsors/sponsor7.png",
                                "img/hps-sponsors/sponsor8.png",
                                "img/hps-sponsors/sponsor9.png",
                                "img/hps-sponsors/sponsor10.png"
                            ];
        $scope.sponsor_array_2 =  ["img/hps-sponsors/sponsor11.png",
                                  "img/hps-sponsors/sponsor12.png",
                                  "img/hps-sponsors/sponsor13.png",
                                  "img/hps-sponsors/sponsor14.png",
                                  "img/hps-sponsors/sponsor15.png",
                                  "img/hps-sponsors/sponsor16.png"
                              ];


    }
})()
