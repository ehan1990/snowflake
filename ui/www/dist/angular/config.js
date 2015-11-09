app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/setting');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('zoo', {
            url: '/zoo',
            templateUrl: 'views/zoosimulatorpage.html',
            controller: 'ZooController'
        })

        .state('kafka_sender', {
            url: '/kafka_sender',
            templateUrl: 'views/flowsimulatorpage.html',
            controller: 'FlowController'
        })

        .state('kafka_reader', {
            url: '/kafka_reader',
            templateUrl: 'views/kafkareaderpage.html',
            controller: 'KafkaReaderController'
        })

        .state('dpi', {
            url: '/dpi',
            templateUrl: 'views/dpisimulatorpage.html',
            controller: 'DpiController'
        })

        .state('scale_up', {
            url: '/scale',
            templateUrl: 'views/scaleuppage.html',
            controller: 'ScaleUpController'
        })

        .state('setting', {
            url: '/setting',
            templateUrl: 'views/settingpage.html',
            controller: 'SettingController'
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