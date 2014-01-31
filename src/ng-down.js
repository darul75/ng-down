(function (angular) {
'use strict';	

	angular.module('ngDown', [])
	.directive('whenBottom', ['$timeout', function(timeout) {
	    return {
	    	restrict : 'AE',
			scope: { action:'&'},
	    	link : function(scope, elm, attrs) {	    
		      
		      var raw = elm[0];
		      var lock = false;
		      var tts = parseInt(attrs.timer, 10) || 1500;

		      //$(window).unbind('scroll');
		      $(window).bind('scroll', function() {
		        // Check if we're within 100 pixels of the bottom edge of the broser window.
		        var winHeight = window.innerHeight ? window.innerHeight : $(window).height(); // iphone fix
		        var closeToBottom = ($(window).scrollTop() + winHeight > $(document).height() - 100);
		        if(closeToBottom && scope.action && !lock) {
		        	lock = true;
		        	scope.action();
		        	timeout(function() {
		        		lock = false;
		        	}, tts);
		        }
		      });
		  }
	    };
  	}]);

})(angular);