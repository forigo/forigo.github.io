var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("https://forigo.github.io", {
        templateUrl: "https://forigo.github.io/templates/home.html"
    })
    .when("https://forigo.github.io/sobre", {
        templateUrl: "https://forigo.github.io/templates/sobre.html"
    })
    .when("https://forigo.github.io/projetos", {
        templateUrl: "https://forigo.github.io/templates/projetos.html"
    })
    .when("https://forigo.github.io/gustavolimaadvocacia", {
        templateUrl: "https://forigo.github.io/templates/projetos/gustavolimaadvocacia.html"
    })
    .when("https://forigo.github.io/sgnirts", {
        templateUrl: "https://forigo.github.io/templates/projetos/sgnirts.html"
    })
    .when("https://forigo.github.io/rocketseat", {
        templateUrl: "https://forigo.github.io/templates/projetos/rocketseat.html"
    })
    .when("https://forigo.github.io/certificados", {
        templateUrl: "https://forigo.github.io/templates/certificados.html"
    })
    .when("https://forigo.github.io/contato", {
        templateUrl: "https://forigo.github.io/templates/contato.html"
    })
    .when("https://forigo.github.io/obrigado", {
        templateUrl: "https://forigo.github.io/templates/obrigado.html"
    })
    .when("https://forigo.github.io/404", {
        templateUrl: "https://forigo.github.io/templates/404.html"
    })

    .otherwise({redirectTo : 'https://forigo.github.io/404'});

});
