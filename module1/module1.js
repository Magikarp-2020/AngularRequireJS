/**
 * Created by lichao on 2016/4/10.
 */

define(['angular'], function (angular, tpl) {

    //angular会自动根据controller函数的参数名，导入相应的服务
    return {
        controller: function ($scope, $routeParams, $http, $interval) {
            $scope.b = 'aaa';
        },
        tpl: tpl
    };
});