(function(angular) {
    angular.module('planit', ['ngRoute'])

        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider.
                when('/index', {
                        templateUrl: 'index.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'home'
                    })
                    .when('/conditions', {
                        templateUrl: 'conditions.html',
                        controller: 'ConditionsCtrl',
                        controllerAs: 'conditions'
                    })
                    .when('/local-nurseries', {
                        templateUrl: 'local-nurseries.html',
                        controller: 'LocalNursiesCtrl',
                        controllerAs: 'local-nurseries'
                    })
                    .when('/plants', {
                        templateUrl: 'plants.html',
                        controller: 'PlantsCtrl',
                        controllerAs: 'plants'
                    })
                    .otherwise({
                        redirectTo: '/index'
                    });
            }
        ])

        .controller('HomeCtrl', function() {
            var vm = this;
        })
        .controller('LocationsCtrl', function() {
            var vm = this;
            vm.who = "Mark Watney";
        })
        .controller('LocalNurseiesCtrl', function() {
            var vm = this;

        })
        .controller('PlantsCtrl', function() {
            var vm = this;
        });
})(window.angular);
