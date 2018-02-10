//CONFIGURATIONS
weatherApp.config(function ($routeProvider, $sceDelegateProvider) {
    
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            'http://api.openweathermap.org**'
          ]);
        
          // The blacklist overrides the whitelist so the open redirect here is blocked.
          $sceDelegateProvider.resourceUrlBlacklist([
            'http://myapp.example.com/clickThru**'
          ]);
    
        $routeProvider
    
        .when('/',{
            templateUrl: 'pages/Home.html',
            controller: 'homeController'
        })
    
        .when('/forecast',{
            templateUrl: 'pages/Forecast.html',
            controller: 'foreCastController'
        })
    
        .when('/forecast/:days',{
            templateUrl: 'pages/Forecast.html',
            controller: 'foreCastController'
        })
    })
    