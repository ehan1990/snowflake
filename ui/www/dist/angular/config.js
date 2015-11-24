app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================

        .state('apiservice', {
            url: '/apiservice',
            templateUrl: 'views/apipage.html',
            controller: 'ApiController'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'views/homepage.html',
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