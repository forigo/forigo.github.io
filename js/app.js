var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider){
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
        templateUrl: 'templates/projetos/gustavolimaadvocacia.html'
    })
    .when('/sgnirts', {
        templateUrl: 'templates/projetos/sgnirts.html'
    })
    .when('/rocketseat', {
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
