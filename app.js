/**
 * Created by WB on 2017/3/20.
 */
var app = angular.module('myApp', ['ui.bootstrap', 'oc.lazyLoad', 'angular-loading-bar', 'ngAnimate', 'ngTouch', 'services', 'routers', 'filters', 'components', 'config']);

app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
	function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
		app.controller = $controllerProvider.register;
		app.directive = $compileProvider.directive;
		app.filter = $filterProvider.register;
		app.factory = $provide.factory;
		app.service = $provide.service;
		app.constant = $provide.constant;
	}]);