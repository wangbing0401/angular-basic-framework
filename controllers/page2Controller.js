/**
 * Created by WB on 2017/3/21.
 */
app.controller('page2Controller', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad){
	$ocLazyLoad.load([
		'./css/page2.css',
	]).then(function () {
		console.log('加载完成');
	});
}])