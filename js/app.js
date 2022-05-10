var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("https://forigo.github.io/", {
        templateUrl: "templates/home.html"
    })
    .when("https://forigo.github.io/sobre", {
        templateUrl: "templates/sobre.html"
    })
    .when("https://forigo.github.io/projetos", {
        templateUrl: "templates/projetos.html"
    })
    .when("https://forigo.github.io/gustavolimaadvocacia", {
        templateUrl: "templates/projetos/gustavolimaadvocacia.html"
    })
    .when("https://forigo.github.io/sgnirts", {
        templateUrl: "templates/projetos/sgnirts.html"
    })
    .when("https://forigo.github.io/rocketseat", {
        templateUrl: "templates/projetos/rocketseat.html"
    })
    .when("https://forigo.github.io/certificados", {
        templateUrl: "templates/certificados.html"
    })
    .when("https://forigo.github.io/contato", {
        templateUrl: "templates/contato.html"
    })
    .when("https://forigo.github.io/obrigado", {
        templateUrl: "templates/obrigado.html"
    })
    .when("https://forigo.github.io/404", {
        templateUrl: "templates/404.html"
    })

    .otherwise({redirectTo : '404'});

});
