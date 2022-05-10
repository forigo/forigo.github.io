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
    .when('projetos/gustavolimaadvocacia', {
        templateUrl: 'templates/projetos/gustavolimaadvocacia.html'
    })
    .when('projetos/sgnirts', {
        templateUrl: 'templates/projetos/sgnirts.html'
    })
    .when('projetos/rocketseat', {
        templateUrl: 'templates/projetos/rocketseat.html'
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
