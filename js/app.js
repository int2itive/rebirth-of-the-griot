
//Scroll back to top

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 

const main = document.querySelector('.rbg-header');
const icons = document.querySelectorAll('.icon');

var hiddenState = "-hidden", nav_dark = "page-header";
let ttlapps = 0;
const apps = [], fullNameList = [], years_every = [];

var threshold = 30, 
      position = 0, 
      lastScroll = 0, 
      n_event = 0;

window.addEventListener("scroll", function () {
    var position = window.scrollY || document.documentElement.scrollTop;
    
    if (position > threshold && position > lastScroll) {
      // console.log("Hello!!!");
      main.classList.add(hiddenState);
    } else {
      main.classList.remove(hiddenState);
      if (window.scrollY > 4) {
        main.classList.add(nav_dark);
      } else {
        main.classList.remove(nav_dark);
      }
    }

    lastScroll = position <= 0 ? 0 : position;

  });


icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

const p = document.querySelector('.rbg--griot-text p:first-child');

let val = getComputedStyle(p, 'font-size');

// console.log(val);
