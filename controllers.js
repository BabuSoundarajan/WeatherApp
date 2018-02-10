//CONTROLLERS
weatherApp.controller('homeController',['$scope','foreCastSerive',function ($scope,foreCastSerive) {
    
    $scope.city = foreCastSerive.city;

    $scope.$watch('city',function () {
        foreCastSerive.city = $scope.city;
    })
    
}]);


weatherApp.controller('foreCastController',['$scope','foreCastSerive','$resource','$routeParams',function ($scope
    ,foreCastSerive,$resource,$routeParams) {
        $scope.city = foreCastSerive.city;
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily");

        $scope.days = $routeParams.days || 2;

        $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city,appid:'81dbec67c3c939f6c0945382b57c8bda', cnt:$scope.days});

        $scope.convertToFahrenheit= function (degk) {
            return Math.round((1.8 * (degk - 273)) + 32);
        }

        $scope.formattedDate = function (date) {
            return new Date(date * 1000);
        }
}]);