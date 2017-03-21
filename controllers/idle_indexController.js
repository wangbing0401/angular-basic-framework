/**
 * Created by WB on 2017/3/21.
 */
app.controller('idle_indexController', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad){
	$ocLazyLoad.load([
		'./css/idle_index.css',
	]).then(function () {
		console.log('加载完成');
	});
}]);