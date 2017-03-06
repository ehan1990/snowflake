app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/balance');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('schedule', {
            url: '/schedule',
            templateUrl: 'assets/schedule/schedule.html'
        })

        .state('balance', {
            url: '/balance',
            templateUrl: 'assets/balance/balance.html'
        })

        .state('faq', {
            url: '/faq',
            templateUrl: 'assets/faq/faq.html'
        })
        
        .state('device-chart', {
            url: '/device/:serial/chart',
            params:{
                serial:null
            },
            templateUrl: 'assets/device/linegraph.html'
        })

        .state('table', {
            url: '/table',
            templateUrl: 'assets/table/simpletable.html'
        })

        .state('temp', {
            url: '/temp',
            templateUrl: 'templates/temp.html'
        });
});