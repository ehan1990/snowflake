app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('zoo', {
            url: '/zoo',
            templateUrl: 'dist/asset/views/zoosimulatorpage.html',
            controller: 'ZooController'
        })

        .state('kafka_sender', {
            url: '/kafka_sender',
            templateUrl: 'dist/asset/views/flowsimulatorpage.html',
            controller: 'FlowController'
        })

        .state('kafka_reader', {
            url: '/kafka_reader',
            templateUrl: 'dist/asset/views/kafkareaderpage.html',
            controller: 'KafkaReaderController'
        })

        .state('dpi', {
            url: '/dpi',
            templateUrl: 'dist/asset/views/dpisimulatorpage.html',
            controller: 'DpiController'
        })

        .state('scale_up', {
            url: '/scale',
            templateUrl: 'dist/asset/views/scaleuppage.html',
            controller: 'ScaleUpController'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'dist/asset/views/home.html',
            controller: 'HomeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
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