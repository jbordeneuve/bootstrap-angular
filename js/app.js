angular.module('qcm-app', ['question-service', 'player-service'])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/index', {controller:SetupCtrl, templateUrl:'setup.html'}).
            when('/start', {controller:QuestionCtrl, templateUrl:'questions.html'}).
            when('/scores', {controller:ScoresCtrl, templateUrl:'scores.html'}).
            otherwise({redirectTo:'/index'});
    });