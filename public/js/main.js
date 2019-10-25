// 'use-strict'

(function () {
	initSmoothScroll()
}())

/**********************************
  helpers
**********************************/


// Initiate the smooth scroll script from the /public/js/smooth-scroll.min.js file
function initSmoothScroll () {
  var scroll = new SmoothScroll();

  var smoothScrollWithoutHash = function (selector, settings) {
  	var clickHandler = function (event) {
  		var toggle = event.target.closest( selector );

  		if ( !toggle || toggle.tagName.toLowerCase() !== "a" || toggle.hash.length === 0 ) return;
  		var anchor = document.querySelector( toggle.hash );
  		if ( !anchor ) return;

  		event.preventDefault();
  		scroll.animateScroll( anchor, toggle, settings || {} );
  	};

  	window.addEventListener('click', clickHandler, false );
  };

  smoothScrollWithoutHash( "a[href*='#']", {
    offset: 75
  } );
}
