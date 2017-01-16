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
            // {
            //     name : 'Team Leads',
            //     members : [
            //       {name : 'Connor Hughes', link: "www.linkedin.com/in/connor-hughes-43495b110"},
            //       {name : 'Riley Harris', link: "https://www.linkedin.com/in/riley-harris-575297124"},
            //       {name : 'Andrew Farrell', link: "https://www.linkedin.com/in/andrew-farrell-771a70100"},
            //       {name : 'Jack Gentsch', link: "https://www.linkedin.com/in/jack-gentsch"},
            //       {name : 'Ahrif McKee', link: "https://www.linkedin.com/in/ahrif-mckee-47a536129"},
            //       {name : 'Riley Lyle', link: ""},
            //       {name : 'Robert Karren', link: ""},
            //       {name : 'Joseph Zacharin', link: "https://www.linkedin.com/in/joseph-zacharin-715064126"},
            //       {name : 'Lucas Campbell', link: ""}
            //     ]
            // },
            {
                name : 'Hull Team',
                members : [
                  {name : 'Riley Harris', link: "https://www.linkedin.com/in/riley-harris-575297124"},
                  {name : 'Sharon Luo', link: "https://www.linkedin.com/in/sharon-luo"},
                  {name : 'Robert Karren', link: ""},
                  {name : 'Kyleah Hess', link: "https://www.linkedin.com/in/kyleahhess"},
                  {name : 'Anna Schmitz', link: ""},
                  {name : 'Sean Lam', link: ""}
                ]
            },
            {
                name : 'Controls Team',
                members : [
                  {name : 'Andrew Farrell', link: "https://www.linkedin.com/in/andrew-farrell-771a70100"},
                  {name : 'Harpreet	Singh', link: ""},
                  {name : 'Nana	Yamagata', link: ""},
                  {name : 'Thuy	Nguyen', link: ""},
                  {name : 'Nikolas Johnson', link: ""},
                  {name : 'Katherine Chun', link: "https://www.linkedin.com/in/chunkatherine"},
                  {name : 'Joseph Zacharin', link: "https://www.linkedin.com/in/joseph-zacharin-715064126"},
                  {name : 'Cassie Riel', link: "https://www.linkedin.com/in/cassie-riel-995650a2"},
                  {name : 'Ashley Huynh', link: ""}
                ]
            },
            {
                name : 'Electronics Team',
                members : [
                  {name : 'Jack Gentsch', link: "https://www.linkedin.com/in/jack-gentsch"},
                  {name : 'Joe Jimenez', link: ""},
                  {name : 'Varun Viswanath', link: "https://www.linkedin.com/in/varun-viswanath-aab70345"},
                  {name : 'Jack Mask', link: "https://www.linkedin.com/in/jmask"},
                  {name : 'Brian Liu', link: ""},
                  {name : 'Michael Essaf', link: ""},
                  {name : 'Jocelyn Ma', link: ""},
                  {name : 'Gabrielle Pang', link: ""},
                  {name : 'Timmy Lee', link: ""},
                  {name : 'Tremaine	Ng', link: "https://www.linkedin.com/in/trenng"},
                  {name : 'Daniel Tran', link: "https://www.linkedin.com/in/daniel-tran-3716a4b9"}
                ]
            },
            {
                name : 'Drivetrain Team',
                members : [
                  {name : 'Ahrif McKee', link: "https://www.linkedin.com/in/ahrif-mckee-47a536129"},
                  {name : 'Robert Reiten', link: ""},
                  {name : 'Kanika Aggarwal', link: "https://www.linkedin.com/in/kanika-aggarwal-492304118"},
                  {name : 'Zachary Tully', link: ""},
                  {name : 'Brendan Greetham', link: "https://www.linkedin.com/in/brendan-greetham-796a9a111"},
                  {name : 'Matt Kim', link: ""},
                  {name : 'Tristan Haider', link: ""},
                  {name : 'Zach	Hasson', link: "https://www.linkedin.com/in/zachary-hasson-347815125"}
                ]
            },
            {
                name : 'Propulsion Team',
                members : [
                  {name : 'Riley Lyle', link: ""},
                  {name : 'Lucas Campbell', link: "https://www.linkedin.com/in/lucas-campbell-a46210114"},
                  {name : 'Echo	Wood', link: ""},
                  {name : 'Piergiorgio Rojas', link: ""},
                  {name : 'Stuart Dickson', link: ""},
                  {name : 'Aashni Purohit', link: ""},
                  {name : 'Nicole Tsang', link: "https://www.linkedin.com/in/nicole-tsang-6b7552129"},
                  {name : 'John	Pham', link: ""},
                  {name : 'Karl	Skeel', link: ""}
                ]
            },
            {
                name : 'Dive Team',
                members : [
                  {name : 'Robert Karren', link: ""},
                  {name : 'Joseph Zacharin', link: "https://www.linkedin.com/in/joseph-zacharin-715064126"},
                  {name : 'Riley Harris', link: "https://www.linkedin.com/in/riley-harris-575297124"},
                  {name : 'Dominic Roarbush', link: ""},
                  {name : 'Carol Nishikawa', link: ""},
                  {name : 'Cassie Riel', link: "https://www.linkedin.com/in/cassie-riel-995650a2"},
                  {name : 'Colin Katagiri', link: "https://www.linkedin.com/in/colinkatagiri"},
                  {name : 'Andrew Farrell', link: "https://www.linkedin.com/in/andrew-farrell-771a70100"},
                  {name : 'Ryland Bryant', link: "https://www.linkedin.com/in/ryland-bryant-a7238519"}
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

        $scope.showSubteam = function(index, member){
            if($scope.is_showing_members == false) {
                $scope.showTheseDetails(index);
            } else {
                $window.location.href = member.link;
            }
        };
        $scope.showThisSubteam = function(index) {
            var len = $scope.roster[index].members.length;
            var temp = [];
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
                details : "",
                img : "img/subteam/subteam-2.png"
            },
            {
                name : "The Controls Team",
                description : "Two words: slalom gates. This team of engineers enables the pilot to navigate the racecourse at the touch of a finger.",
                glyph : "fa fa-compass fa-stack-1x text-primary",
                details : "",
                img : "img/subteam/subteam-5.png"
            },
            {
                name : "The Electronics Team",
                description : "An eccentric team of electrical engineers, computer scientists, and magicians develops the future of submarine control.",
                glyph : "fa fa-gamepad fa-stack-1x text-primary",
                details : "",
                img : "img/subteam/subteam-6.JPG"
            },
            {
                name : "The Drivetrain Team",
                description : "A hardworking team of friction-fighters takes the power seamlessly from the pilot to the propeller.",
                glyph : "fa fa-cogs fa-stack-1x text-primary",
                details : "",
                img : "img/subteam/subteam-1.png"
            },
            {
                name : "The Propulsion Team",
                description : "A sharp team of aeronautical and mechanical engineers design the most efficient propeller known to man(power).",
                glyph : "glyphicon glyphicon-dashboard glyphicon-stack-1x text-primary",
                details : "",
                img : "img/subteam/subteam-3.png"
            },
            {
                name : "The Divers",
                description : "An elite team of highly-trained pilots and support divers execute our underwater operations without a hitch.",
                glyph : "fa fa-street-view fa-stack-1x text-primary",
                details : "",
                img : "img/subteam/subteam-4.png"
            }
        ]

        $scope.showTheseDetails = function(i) {
            $scope.showDetails = true;
            $scope.infopanelTitle = $scope.teamInfo[i].name;
            $scope.infopanelDetails = $scope.teamInfo[i].description;
            $scope.infopanelImage = $scope.teamInfo[i].img;
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

                                "img/hps-sponsors/sponsor5.png",
                                "img/hps-sponsors/sponsor6.png",
                                "img/hps-sponsors/sponsor7.png",
                                "img/hps-sponsors/sponsor8.png",
                                "img/hps-sponsors/sponsor9.png",
                            ];

        $scope.importantSponsors = [
            {
                img : "img/hps-sponsors/fluke.png",
                link : "http://www.fluke.com"
            },
            {
                img : "img/hps-sponsors/dive.png",
                link : "https://dive-xtras.com"
            },
            {
                img : "img/hps-sponsors/glosten.png",
                link : "http://glosten.com"
            },
            {
                img : "img/hps-sponsors/sname.png",
                link : "http://www.sname.org/home"},
            {
                img : "img/hps-sponsors/umbra.png",
                link : "https://www.umbragroup.com/en/"
            }
        ];
        $scope.goTo = function(link) {
            $window.location.href = link;
    };

        // $scope.sponsor_array_2 =  ["img/hps-sponsors/sponsor11.png",
        //                           "img/hps-sponsors/sponsor12.png",
        //                           "img/hps-sponsors/sponsor13.png",
        //                           "img/hps-sponsors/sponsor14.png",
        //                           "img/hps-sponsors/sponsor15.png",
        //                           "img/hps-sponsors/sponsor16.png"
        //                       ];
        //                                 "img/hps-sponsors/sponsor4.png",
        //        "img/hps-sponsors/sponsor10.png"


    }
})()