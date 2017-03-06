app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/balance');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('schedule', {
            url: '/schedule',
            templateUrl: 'assets/schedule/schedule.html'
        })
});