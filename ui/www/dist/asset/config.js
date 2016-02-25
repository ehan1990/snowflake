app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('db', {
            url: '/db',
            templateUrl: 'dist/asset/view/template.html',
            controller: 'TemplateController'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'dist/asset/view/home.html',
            controller: 'HomeController'
        })

        .state('table', {
            url: '/table',
            templateUrl: 'dist/asset/view/mock/table.html',
            controller: 'TableController'
        })

        .state('temp', {
            url: '/temp',
            templateUrl: 'dist/asset/view/template.html',
            controller: 'TemplateController'
        });
});