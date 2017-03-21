/**
 * Created by WB on 2017/3/20.
 */
var routers = angular.module('routers', ['ui.router']);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('idle_index', {
		url:'/idle_index',
		templateUrl:'./template/idle_index.html',
		controller:'idle_indexController',
		resolve:{
			deps:['$ocLazyLoad', function($ocLazyLoad){
				return $ocLazyLoad.load('./controllers/idle_indexController.js');
			}]
		}
	}).state('page2', {
		url:'/page2',
		templateUrl:'./template/page2.html',
		controller:'page2Controller',
		resolve:{
			deps:['$ocLazyLoad', function($ocLazyLoad){
				return $ocLazyLoad.load('./controllers/page2Controller.js');
			}]
		}
	});
}]);