// Code goes here

angular.module('CORSDemo', [])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})
.controller('MyController', function($scope, $http, $sce) {
	
  $scope.embedUrl = "http://www.youtube.com/embed/";
		
	$scope.trustSrc = function(src) {
	  return $sce.trustAsResourceUrl(src);
	};//strict contextual escaping

	$scope.searchYouTube = function(keyword) {
			
  	$scope.keyword = keyword;

	  var url = "https://www.googleapis.com/youtube/v3/search";
	  var request = {
		  key: "AIzaSyBIT2homLIII4fhIFO1ePwQDKA_rm2Ym30",
		  part: "snippet",
		  maxResults: 10,
		  order: "viewCount",
		  q: keyword,
		  type: "video",
		  videoEmbeddable: true,
	  };//search parameters

	  $http({
		  method: 'GET',
		  url: url,
		  params: request
	  })
	  .success(function(data) {
		  $scope.results = data.items;
	  })
	  .error(function() {
		  alert('error');
	  });
  };

});