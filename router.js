/**
 * Created by lichao on 2016/4/10.
 */

define(['angular', 'require', 'jquery','angular-route'], function (angular, require, $) {

    var app = angular.module('webapp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', '$controllerProvider',
        function ($routeProvider, $controllerProvider) {

            var defaultRoute = '/module2';              //默认跳转到某个路由

            $routeProvider.otherwise({redirectTo: defaultRoute});

            var routeMap = {};

            $.ajax({
                url:'routers.json',
                async:false,
                type:"get",
                success:function (data) {
                    routeMap = data;
                }
            });

            for (var key in routeMap) {
                $routeProvider.when(key, {
                    templateUrl: routeMap[key].templateUrl,
                    controller: routeMap[key].controller,
                    resolve: {
                        keyName: requireModule(routeMap[key].path, routeMap[key].controller)
                    }
                })
            }

            function requireModule(path, controller) {
                console.log(path,controller);
                return function ($route, $q) {
                    var deferred = $q.defer();
                    require([path], function (ret) {
                        $controllerProvider.register(controller, ret.controller);
                        $route.current.template = ret.tpl;
                        deferred.resolve();
                    });
                    return deferred.promise;
                }
            }
        }]);

    return app;
});