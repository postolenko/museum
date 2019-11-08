function getThumbDescriptSize() {
    $(".thumb_4").each(function() {
        imageWidth = $(this).find("img").width();
        $(this).find(".descript").css({
            "width" : imageWidth + "px"
        });
    });
}

function getPositionMenu() {
    if( $(document).scrollTop() > $(".main_nav_scroll_wrapp").offset().top + 150) {
        $(".main_nav_scroll_wrapp").height($("#fixed_menu").height());
        $("#fixed_menu").addClass("fixed");
    } else {
        $(".main_nav_scroll_wrapp").height(false);
        $("#fixed_menu").removeClass("fixed");
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var nextSlideDescript,
    sliderName,
    arrowsSlider,
    imageWidth;

$(window).on('load', function() {
    $("[data-slider]").each(function() {
        sliderName = $(this).attr("data-slider");
        arrowsSlider = $(this).find(".slick-arrow");
        $("[data-slider-arrows = '"+sliderName+"']").append(arrowsSlider);
    });
});

$(window).resize(function() {
    getThumbDescriptSize();
    getPositionMenu();
});

$(document).scroll(function() {
    getPositionMenu();
});

$(document).ready(function() {

    getThumbDescriptSize();
    getPositionMenu();

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
            nextArrow: '<button class="slick_next" aria-label="Next" type="button"><img src="img/arrow_left_gold.svg"></button>'
        });
        $('.promo_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            nextSlideDescript = $(".promo_slider .slick-current .slide_desc .inner").html();
            $("#slideContent").html(nextSlideDescript);
        });
        nextSlideDescript = $('.promo_slider').find(".slick-current .slide_desc .inner").html();
        $("#slideContent").html(nextSlideDescript);
    }

    if( $(".variable_width_sl").length > 0 ) {
        $(".variable_width_sl").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: '<button class="slick_prev arrow_gray" aria-label="Previous" type="button"><img src="img/arrow_right_gray.svg"></button>',
            nextArrow: '<button class="slick_next arrow_gray" aria-label="Next" type="button"><img src="img/arrow_left_gray.svg"></button>'
        });
    }   

    if( $(".slider_5").length > 0 ) {
        $(".slider_5").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<button class="slick_prev" aria-label="Previous" type="button"><img src="img/arrow_right_gold.svg"></button>',
            nextArrow: '<button class="slick_next" aria-label="Next" type="button"><img src="img/arrow_left_gold.svg"></button>',
            responsive: [
             {
               breakpoint: 1020,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 800,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
               }
             }
           ]
        });
    }   

	if( $(".slider_6").length > 0 ) {
		$(".slider_6").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick_prev" aria-label="Previous" type="button"><img src="img/arrow_right_gold.svg"></button>',
            nextArrow: '<button class="slick_next" aria-label="Next" type="button"><img src="img/arrow_left_gold.svg"></button>',
            responsive: [
             {
               breakpoint: 1250,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 970,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             }
           ]
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

    // ---------------------

    $("[data-dropdownbtn2], .select_input").on('click', function(e) {
        e.preventDefault();
        if( $(this).hasClass("select_input") ) {
            dropdownMenuName = $(this).closest(".dropdowm_select_menu").find('[data-dropdownbtn2]').attr("data-dropdownbtn2");
            dropdownMenu = $("[data-dropdown2 = '"+ dropdownMenuName + "']");
        } else {
            dropdownMenu = $("[data-dropdown2 = '"+ $(this).attr("data-dropdownbtn2") + "']");
        }
        if( $(this).hasClass("active") ) {
            dropdownMenu.removeClass("active");
            $(this).removeClass("active");
            setTimeout(function() {
                dropdownMenu.css({
                    "left" : -9999999 + "px"
                });
            }, 400);
        } else {
            $(".dropdowm_select_menu .select_input").removeClass("active");        
            $(".dropdown_btn_2").removeClass("active");
            $("[data-dropdown2]").removeClass("active");
            $("[data-dropdown2]").css({
                "left" : -9999999 + "px"
            });
            dropdownMenu.css({
                    "left" : 0
                });
            $(this).addClass("active");
            dropdownMenu.addClass("active");
        }
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdowm_select_menu");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            $("[data-dropdown2]").removeClass("active");
            $("[data-dropdownbtn2], .select_input").removeClass("active");
            setTimeout(function() {
                $("[data-dropdown2]").css({
                    "left" : -9999999 + "px"
                });
            }, 400);
        }

    });

    $(".dropdown_select_list p").on('click', function(e) {
        e.preventDefault();
        var val = $(this).text();
        parentBlock = $(this).closest(".dropdowm_select_menu");
        var selectInput = parentBlock.find(".select_input");
        // selectInput.val(val);
        selectInput.html(val);
        var dropdownMenu = $(this).closest(".dropdown");
        dropdownMenu.removeClass("active");
        parentBlock.find("[data-dropdownbtn2]").removeClass("active");
        parentBlock.find(".select_input").removeClass("active");
        setTimeout(function() {
            dropdownMenu.css({
                "left" : -9999999 + "px"
            });
        }, 400);
    });

});