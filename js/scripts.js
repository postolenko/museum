function getThumbDescriptSize() {
    $(".thumb_4").each(function() {
        imageWidth = $(this).find(".img_box").width();
        $(this).find(".descript").css({
            "width" : imageWidth + "px"
        });
    });
}

function getPositionMenu() {
    if(bodyWidth > 900) {
        if( $(document).scrollTop() > $(".main_nav_scroll_wrapp").offset().top + 150) {
            $(".main_nav_scroll_wrapp").height($("#fixed_menu").outerHeight());
            $("#fixed_menu").addClass("fixed");
        } else {
            $(".main_nav_scroll_wrapp").height(false);
            $("#fixed_menu").removeClass("fixed");
        }
    }
}

function getRespHeiaderParams() {
    if(bodyWidth <= 900) {
        if( $(document).scrollTop() > 2 ) {
            $("#resp_header").addClass("grey_bg_dark");
        } else {
            $("#resp_header").removeClass("grey_bg_dark");
        }
    }
}

function setSliderArrows() {
    $("[data-slider]").each(function() {
        sliderName = $(this).attr("data-slider");
        arrowsSlider = $(this).find(".slick-arrow");
        $("[data-slider-arrows = '"+sliderName+"']").append(arrowsSlider);
    });
}

function getAppendNavMenu() {
    if(bodyWidth <= 900) {
        $("#resp_nav").appendTo(".resp_nav_wrapp");
    } else {
        $("#resp_nav").appendTo(".main_nav_wrapp");
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
    setSliderArrows();
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getThumbDescriptSize();
    getPositionMenu();
    getRespHeiaderParams();
    setSliderArrows();
    getAppendNavMenu();
});

$(document).scroll(function() {
    getPositionMenu();
    getRespHeiaderParams();
});

$(document).ready(function() {

    getThumbDescriptSize();
    getPositionMenu();
    getRespHeiaderParams();
    getAppendNavMenu();

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
            nextArrow: '<button class="slick_next arrow_gray" aria-label="Next" type="button"><img src="img/arrow_left_gray.svg"></button>',
            responsive: [
             {
               breakpoint: 600,
               settings: {
                 arrows: false
               }
             }
           ]
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
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToScroll: 1,
                variableWidth: true
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
             },
             {
               breakpoint: 600,
               settings: {
                slidesToShow: 1,
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

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_langs");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.slideUp(300);
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".dropdown_langs").slideUp(300);
        }
    });

    // ---------------------

    // $("[data-dropdownbtn2], .select_input").on('click', function(e) {
    //     e.preventDefault();
    //     if( $(this).hasClass("select_input") ) {
    //         dropdownMenuName = $(this).closest(".dropdowm_select_menu").find('[data-dropdownbtn2]').attr("data-dropdownbtn2");
    //         dropdownMenu = $("[data-dropdown2 = '"+ dropdownMenuName + "']");
    //     } else {
    //         dropdownMenu = $("[data-dropdown2 = '"+ $(this).attr("data-dropdownbtn2") + "']");
    //     }
    //     if( $(this).hasClass("active") ) {
    //         dropdownMenu.removeClass("active");
    //         $(this).removeClass("active");
    //         setTimeout(function() {
    //             dropdownMenu.css({
    //                 "left" : -9999999 + "px"
    //             });
    //         }, 400);
    //     } else {
    //         $(".dropdowm_select_menu .select_input").removeClass("active");        
    //         $(".dropdown_btn_2").removeClass("active");
    //         $("[data-dropdown2]").removeClass("active");
    //         $("[data-dropdown2]").css({
    //             "left" : -9999999 + "px"
    //         });
    //         dropdownMenu.css({
    //                 "left" : 0
    //             });
    //         $(this).addClass("active");
    //         dropdownMenu.addClass("active");
    //     }
    // });

    // $(document).mouseup(function (e){
    //     hide_element = $(".dropdowm_select_menu");
    //     if (!hide_element.is(e.target)
    //         && hide_element.has(e.target).length === 0) {
    //         $("[data-dropdown2]").removeClass("active");
    //         $("[data-dropdownbtn2], .select_input").removeClass("active");
    //         setTimeout(function() {
    //             $("[data-dropdown2]").css({
    //                 "left" : -9999999 + "px"
    //             });
    //         }, 400);
    //     }
    // });

    // $(".dropdown_select_list p").on('click', function(e) {
    //     e.preventDefault();
    //     var val = $(this).text();
    //     parentBlock = $(this).closest(".dropdowm_select_menu");
    //     var selectInput = parentBlock.find(".select_input");
    //     selectInput.html(val);
    //     var dropdownMenu = $(this).closest(".dropdown");
    //     dropdownMenu.removeClass("active");
    //     parentBlock.find("[data-dropdownbtn2]").removeClass("active");
    //     parentBlock.find(".select_input").removeClass("active");
    //     setTimeout(function() {
    //         dropdownMenu.css({
    //             "left" : -9999999 + "px"
    //         });
    //     }, 400);
    // });


    $("[data-calendar-link]").on("click", function(e) {
        e.preventDefault();
        var calendarName = $(this).attr("data-calendar-link");
        var calendar = $("[data-calendar = '"+ calendarName +"']");
        if(calendar.is(":hidden")) {
            calendar.slideDown(300);
        } else {
            calendar.slideUp(300);
        }
    });

    // -------------------------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $("body").addClass("fixed");
        $("[data-popup]").fadeIn(300);
    });

    $(".close_btn").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "")
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(this).closest("[data-popup]").fadeOut(300);
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "")
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $("[data-popup]").fadeOut(300);
        }
    });

    $(".popup_sect").mouseup(function (e){
        hide_element = $(".popup_wrapp");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "")
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $("[data-popup]").fadeOut(300);
        }
    });

    // ------------

    $(".main_nav > li > a").on("click", function(e) {
        var parentItem = $(this).closest("li");
        if(parentItem.find("ul").length > 0) {
            e.preventDefault();
            $(".main_nav li a").removeClass("active");
            $(".main_nav li ul").css({"display" : "none"});
            var innerList = parentItem.find("ul");
             if( innerList.is(":hidden")) {
                innerList.css({"display" : "block"});
                $(this).addClass("active");
                var backElHeight = $(".main_nav_wrapp").height()+innerList.position().top+ innerList.height()+115;
                $(".back_el").css({
                    "display":"block",
                    "height" : backElHeight + "px"
                });
             } else {
                innerList.css({"display" : "none"});
                $(this).removeClass("active");
                $(".back_el").css({
                    "display":"none",
                    "height" : "auto"
                });
             }
        } else {
            $(".main_nav li a").removeClass("active");
            $(".main_nav li ul").css({"display" : "none"});
            $(".back_el").css({
                "display":"none",
                "height" : "auto"
            });
        }
    });

    $(document).mouseup(function (e){
        hide_element = $(".main_nav > li > a");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0 
            && bodyWidth >= 900) {
            $(".main_nav li a").removeClass("active");
            $(".main_nav li ul").css({"display" : "none"});
            $(".back_el").css({
                "display":"none",
                "height" : "auto"
            });
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".main_nav li a").removeClass("active");
            $(".main_nav li ul").css({"display" : "none"});
            $(".back_el").css({
                "display":"none",
                "height" : "auto"
            });
        }
    });

    // ----------------

    var respMenu;

    $("[data-resp-btn]").click(function() {
        $(".resp_menu").fadeOut(300);
        $("[data-resp-btn]").removeClass("active");
        respMenu = $("[data-resp-menu = '"+$(this).attr('data-resp-btn')+"']");
        if( respMenu.is(":hidden") ) {
            respMenu.fadeIn(300);
            $(this).addClass("active");
            $("#resp_header").addClass("bg");
        } else {
            respMenu.fadeOut(300);
            $(this).removeClass("active");
            $("#resp_header").removeClass("bg");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
                $(".resp_menu").fadeOut(300);
                $("[data-resp-btn]").removeClass("active");
                $("#resp_header").removeClass("bg");
        }
    });

});