var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

	if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            appendArrows: $(".promo_sl_arrows"),
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slick_prev" aria-label="Previous" type="button"><img src="img/arrow_right_gold.svg"></button>',
            nextArrow: '<button class="slick_next" aria-label="Next" type="button"><img src="img/arrow_left_gold.svg"></button>',
                
            // fade: true
        });
    }

	if( $(".slider_6_wrapp").length > 0 ) {
		$(".slider_6_wrapp").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick_prev" aria-label="Previous" type="button"><img src="img/arrow_right_gold.svg"></button>',
            nextArrow: '<button class="slick_next" aria-label="Next" type="button"><img src="img/arrow_left_gold.svg"></button>'
        });
	}	    

	$(".lang_active").on("click", function(e) {
		e.preventDefault();
		var parentBlock = $(this).closest(".langs_wrapp");
		var dropdownList = parentBlock.find(".dropdown_langs");
		if(dropdownList.is(":hidden")) {
			dropdownList.slideDown(300);
			// $(this).addClass("active");
		} else {
			dropdownList.slideUp(300);
			// $(this).removeClass("active");
		}
	});

});