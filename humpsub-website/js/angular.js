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
            $scope.isShowingSponsorPitch = true;
            $scope.isShowingMailingList = false;
        }

        // Portfolio
        $scope.fullPortfolio = [
            {src : "img/portfolio/portfolio-1.jpg"},
            {src : "img/portfolio/portfolio-2.jpg"},
            {src : "img/portfolio/portfolio-3.jpg"},
            {src : "img/portfolio/portfolio-4.jpg"},
            {src : "img/portfolio/portfolio-5.jpg"},
            {src : "img/portfolio/portfolio-6.jpg"},
            {src : "img/portfolio/portfolio-1.jpg"},
            {src : "img/portfolio/portfolio-2.jpg"},
            {src : "img/portfolio/portfolio-3.jpg"},
            {src : "img/portfolio/portfolio-4.jpg"},
            {src : "img/portfolio/portfolio-5.jpg"},
            {src : "img/portfolio/portfolio-6.jpg"}
        ];

        $scope.portfolio = new Array();
        $scope.initializePortfolio = function() {
            $scope.portfolio = [];
            for(var i = 0; i < 6; i++) {
                $scope.portfolio.push($scope.fullPortfolio[i]);
            }
        }
        $scope.initializePortfolio();
        $scope.isShowingMore = false;
        $scope.showMore = function() {
            $scope.isShowingMore = true;
            for(var i = 6; i < $scope.fullPortfolio.length; i++) {
                $scope.portfolio.push($scope.fullPortfolio[i]);
            }
        }
        $scope.showLess = function() {
            $scope.isShowingMore = false;
            $scope.initializePortfolio();
        }
        // SPONSOR INFORMATION

        $scope.sponsorName = "";

        $scope.search_sponsors = "";

        $scope.sponsor_logos_dir = "img/hps-sponsors/blue-white-transparent/";

        $scope.sponsor_array = [
            {
                name : "Umbra Group",
                imgSrc: "sponsor1.png",
                link : "https://www.umbragroup.com/en/"
            },
            {
                name : "Glosten, Inc.",
                imgSrc: "sponsor2.png",
                link : "http://glosten.com/"
            },
            {
                name : "Electroimpact Inc.",
                imgSrc: "sponsor3.png",
                link : "https://www.electroimpact.com/"
            },
            {
                name : "Janicki Industries, Inc.",
                imgSrc: "sponsor4.png",
                link : "https://www.janicki.com/"
            },
            {
                name : "AkzoNobel N.V.",
                imgSrc: "sponsor5.png",
                link : "https://www.akzonobel.com/"
            },
            {
                name : "Breedt Production Tooling and Design",
                imgSrc: "sponsor6.png",
                //  TODO: replace the following link with "http://www.bptdesign.com/" when that is up
                link : "https://www.facebook.com/Breedt-Production-Tooling-Design-595491847134307/"
            },
            {
                name : "Claroworks Product Development",
                imgSrc: "sponsor7.png",
                link : "http://www.claroworks.com/"
            },
            {
                name : "Click Bond, Inc.",
                imgSrc: "sponsor8.png",
                link : "http://clickbond.com/"
            },
            {
                name : "Color Craft Inc.",
                imgSrc: "sponsor9.png",
                link : "http://colorcraftinc.com/"
            },
            {
                name : "Dive Xtras",
                imgSrc: "sponsor10.png",
                link : "https://dive-xtras.com/"
            },
            {
                name : "Fiberlay Inc",
                imgSrc: "sponsor11.png",
                link : "http://www.fiberlay.com/"
            },
            {
                name : "Fluke Corporation",
                imgSrc: "sponsor12.png",
                link : "http://www.fluke.com/"
            },
            {
                name : "Hexcel Corporation",
                imgSrc: "sponsor13.png",
                link : "http://www.hexcel.com/"
            },
            {
                name : "Lighthouse Diving Center, Inc.",
                imgSrc: "sponsor14.png",
                link : "http://www.lighthousediving.com/"
            },
            {
                name : "Northwest School of Wooden BoatBuilding",
                imgSrc: "sponsor15.png",
                link : "http://www.nwswb.edu/"
            },
            {
                name : "Pacific Research Laboratories, Inc.",
                imgSrc: "sponsor16.png",
                link : "http://www.pacific-research.com/"
            },
            {
                name : "The Society of Naval Architects and Marine Engineers",
                imgSrc: "sponsor17.png",
                link : "http://www.sname.org/home"
            },
            {
                name : "Tap Plastics Inc.",
                imgSrc: "sponsor18.png",
                link : "http://www.tapplastics.com/"
            }
        ];

    }
})()
