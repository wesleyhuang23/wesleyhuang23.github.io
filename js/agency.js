// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict
    // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	// 	disableOn: 700,
	// 	type: 'iframe',
	// 	mainClass: 'mfp-fade',
	// 	removalDelay: 160,
	// 	preloader: false,

	// 	fixedContentPos: false
        
	// });
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	// 	disableOn: 700,
	// 	type: 'iframe',
	// 	mainClass: 'mfp-fade',
	// 	removalDelay: 160,
	// 	preloader: false,

	// 	fixedContentPos: false
    // });
    
    particlesJS.load('particles-js', 'particles.json', function() {

    });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // bind filter button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        });
    });
  

})(jQuery); // End of use strict
