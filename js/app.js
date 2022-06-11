var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/sobre', {
        templateUrl: 'templates/sobre.html'
    })
    .when('/projetos', {
        templateUrl: 'templates/projetos.html'
    })
    .when('/gustavolimaadvocacia', {
        templateUrl: 'templates/gustavolimaadvocacia.html'
    })
    .when('/sgnirts', {
        templateUrl: 'templates/sgnirts.html'
    })
    .when('/explorer', {
        templateUrl: 'templates/explorer.html'
    })
    .when('/nlwreturn', {
        templateUrl: 'templates/nlwreturn.html'
    })
    .when('/maratona-explorer', {
        templateUrl: 'templates/maratona-explorer.html'
    })
    .when('/certificados', {
        templateUrl: 'templates/certificados.html'
    })
    .when('/contato', {
        templateUrl: 'templates/contato.html'
    })
    .when('/obrigado', {
        templateUrl: 'templates/obrigado.html'
    })
    .when('/404', {
        templateUrl: 'templates/404.html'
    })
    .otherwise({redirectTo : '404'})
    
});
