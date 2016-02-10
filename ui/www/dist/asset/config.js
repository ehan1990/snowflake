app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('db', {
            url: '/db',
            templateUrl: 'dist/asset/view/zoosimulatorpage.html',
            controller: 'ZooController'
        })

        .state('kafka_reader', {
            url: '/kafka_reader',
            templateUrl: 'dist/asset/view/kafkareaderpage.html',
            controller: 'KafkaReaderController'
        })

        .state('dpi', {
            url: '/dpi',
            templateUrl: 'dist/asset/view/dpisimulatorpage.html',
            controller: 'DpiController'
        })

        .state('scale_up', {
            url: '/scale',
            templateUrl: 'dist/asset/view/scaleuppage.html',
            controller: 'ScaleUpController'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'dist/asset/view/home.html',
            controller: 'HomeController'
        });        
});