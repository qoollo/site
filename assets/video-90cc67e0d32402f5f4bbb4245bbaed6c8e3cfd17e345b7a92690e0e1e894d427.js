document.addEventListener('DOMContentLoaded', function(){ 
	function trackLocation(e) {
		var rect = videoContainer.getBoundingClientRect(),
	      position = ((e.pageX - rect.left) / videoContainer.offsetWidth)*100;
		if (position <= 100) { 
			videoClipper.style.width = position+"%";
			clippedVideo.style.width = ((100/position)*100)+"%";
			clippedVideo.style.zIndex = 3;
		}
	}
	var videoContainer = document.getElementById("video-compare-container"),
	videoClipper = document.getElementById("video-clipper"),
	clippedVideo = videoClipper.getElementsByTagName("video")[0];
	videoContainer.addEventListener( "mousemove", trackLocation, false); 
	videoContainer.addEventListener("touchstart",trackLocation,false);
	videoContainer.addEventListener("touchmove",trackLocation,false);


	var video_before = document.querySelector('.video_before');
    var video_after = document.querySelector('.video_after');

	window.addEventListener('load', function() {
	    // var video_before = document.querySelector('.video_before');
	    // var video_after = document.querySelector('.video_after');
	    // var preloader = document.querySelector('.preloader');

	    function checkLoad() {
	        if ((video_before.readyState === 4) && (video_after.readyState === 4)) {
	            // preloader.parentNode.removeChild(preloader);
	            video_after.play();
	            video_before.play();
	        } else {
	            setTimeout(checkLoad, 100);
	        }
	    }

	    checkLoad();

	}, false);

	// 2. Synchronize vids via IDs
	$.synchronizeVideos(0, "video_original", "video_ar");



	video_after.onended = video_before.onended = function(){

		setTimeout(function () {
			if(video_after.ended && video_before.ended)
			{
		            video_after.play();
		            video_before.play();			
			}
		}, 1000);

	};  
});
