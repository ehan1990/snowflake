app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/zoo');
    
    $stateProvider
        
        .state('zoo', {
            url: '/zoo',
            templateUrl: 'views/zoosimulatorpage.html',
            controller: 'ZooController'
        })

        .state('kafka', {
            url: '/kafka',
            templateUrl: 'flowsimulatorpage.html',
            controller: 'FlowController'
        })

        .state('barfoo', {
            url: '/barfoo',
            templateUrl: 'barfoo.html',
            controller: 'barfoocontroller'
        })
                        
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });
        
});