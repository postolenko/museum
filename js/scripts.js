function getPositionMenu() {
    if(bodyWidth > 900 && $(".main_nav_scroll_wrapp").length > 0) {
        if( $(document).scrollTop() > $(".main_nav_scroll_wrapp").offset().top + 150) {
            $(".main_nav_scroll_wrapp").height($("#fixed_menu").outerHeight());
            $("#fixed_menu").addClass("fixed");
        } else {
            $(".main_nav_scroll_wrapp").height(false);
            $("#fixed_menu").removeClass("fixed");
        }
    }
}

function getRespHeaderParams() {
    if(bodyWidth <= 900) {
        if( $(document).scrollTop() > 2 ) {
            $("#resp_header").addClass("grey_bg_dark");
        } else {
            $("#resp_header").removeClass("grey_bg_dark");
        }
    } else {
        $("#resp_header").removeClass("grey_bg_dark");
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

function getAppendMap() {
    if(bodyWidth <= 900) {
        $("#map").appendTo(".resp_map");
    } else {
        $("#map").appendTo(".map_box");
    }
}

function countTotalPrice() {
    if( $(".goods_prices").length > 0 ) {
        priceGood = 0;
        priceValTotal = 0;
        $(".goods_prices [data-price-val]").each(function() {
            priceVal = parseInt( $(this).attr("data-price-val") );
            goodsCount = $(this).closest(".good_price_item").find(".goods_count input").val();
            if(goodsCount == "") {
                goodsCount = 0;
            }
            priceGood = priceVal * goodsCount;
            priceValTotal += priceGood;
        });
        $("#total_price").html(priceValTotal);
    }
}

function scrollNav() {
    if($(".page_nav").length > 0) {
        navCoord = $(".page_nav").offset().top;
        $(".page_nav a").each(function() {
            linkHref = $(this).attr("href");
            elemCoord = $(linkHref);
            topElemCoord = elemCoord.offset().top;
            if( navCoord > topElemCoord) {
                $(".page_nav a").removeClass("active");
                $(".page_nav a").removeClass("active_scroll");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        museumTopCoord = $(".scroll_page").offset().top;
        museumBottomCoord = $(".scroll_page").offset().top + $(".scroll_page").height();
        museumNavBottomCoord = $(".page_nav").offset().top + $(".page_nav").height() - 50;
        if($(window).scrollTop() + 100 > museumTopCoord &&  museumBottomCoord >= museumNavBottomCoord ) {
            $(".page_nav").addClass("visible");
        } else {
            $(".page_nav").removeClass("visible");
        }
    }
}

function getEventsSliderParams() {
    if( $(".events_slider .mCSB_container").hasClass("mCS_x_hidden")) {
        $(".events_slider").removeClass("scroller");
    } else {
        $(".events_slider").addClass("scroller");
    }
}

//  function getAdaptivePositionElements() {
//     $(".append-elem").each(function() {
//         // if( $(this).hasClass("desktop-position") ) {
//             screenParam = parseInt( $(this).attr("data-min-screen") );
//             indexElem = $(this).attr("data-append-descktop-elem");
//             if( bodyWidth <= screenParam ) {
//                 $("[data-append-elem = '"+ indexElem +"']").append($(this).html());
//                 console.log("1");
//             }
//             if( bodyWidth > screenParam ) {
//                 $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").html());
//                 console.log("2");
//             }
//             console.log("1");
//         // }
//     });
// }

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var nextSlideDescript,
    sliderName,
    arrowsSlider,
    imageWidth,
    respMenu,
    dropdownBox,
    dropdownContent,
    appendElem,
    respWidth,
    priceVal,
    goodsCount,
    goodsCount,
    priceValTotal,
    priceGood,
    dropdownItem,
    museumTopCoord,
    museumBottomCoord,
    museumNavBottomCoord;

$(window).on('load', function() {
    setSliderArrows();
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getPositionMenu();
    getRespHeaderParams();
    setSliderArrows();
    getAppendNavMenu();
    getAppendMap();
    scrollNav();
    getEventsSliderParams();
});

$(document).scroll(function() {
    getPositionMenu();
    getRespHeaderParams();
    scrollNav();
});

$(document).ready(function() {

    getPositionMenu();
    getRespHeaderParams();
    getAppendNavMenu();
    getAppendMap();
    countTotalPrice();
    scrollNav();
    getEventsSliderParams();

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

    if( $(".variable_width_sl_2").length > 0 ) {
        $(".variable_width_sl_2").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToScroll: 1,
            variableWidth: true
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

    if( $(".single_image_slider").length > 0 ) {
        $('.single_image_slider').on('init', function(event, slick){
            sliderName = $(this).attr("data-single-slider");
            siderArrows = $(this).find(".slick-arrow");
            siderArrows.appendTo($("[data-single-slider-arrows = '"+sliderName+"']"));
        });
        $(".single_image_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // appendArrows: $(".single_image_slider_arrows"),
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick_prev slick_arrow_big" aria-label="Previous" type="button"><img src="img/arrow_right_gold.svg"></button>',
            nextArrow: '<button class="slick_next slick_arrow_big" aria-label="Next" type="button"><img src="img/arrow_left_gold.svg"></button>'
        });
    }    

    // if( $(".events_slider").length > 0 ) {
    //     $(".events_slider").not(".slick-initialized").slick({
    //         dots: false,
    //         arrows: true,
    //         autoplay: false,
    //         autoplaySpeed: false,
    //         speed: 1200,
    //         infinite: false,
    //         slidesToScroll: 1,
    //         swipeToSlide: true,
    //         variableWidth: true,
    //         initialSlide: 0,
    //         prevArrow: '<button class="slick_prev transparent_arrow_left" aria-label="Previous" type="button"></button>',
    //         nextArrow: '<button class="slick_next transparent_arrow_right" aria-label="Next" type="button"></button>'
    //     });
    // }

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

    $(".resp_filter_item").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".resp_filter");
        dropdownMenu = parentBlock.find(".resp_filter_dropdown");
        if(dropdownMenu.is(":hidden")) {
            dropdownMenu.slideDown(300);
            $(this).addClass("active");
        } else {
            dropdownMenu.slideUp(300);
            $(this).removeClass("active");
        }
    });

    // ---------------------

    // $("[data-dropdownbtn], .select_input").on('click', function(e) {
    //     e.preventDefault();
    //     if( $(this).hasClass("select_input") ) {
    //         dropdownMenuName = $(this).closest(".dropdowm_select_menu").find('[data-dropdownbtn]').attr("data-dropdownbtn");
    //         dropdownMenu = $("[data-dropdown = '"+ dropdownMenuName + "']");
    //     } else {
    //         dropdownMenu = $("[data-dropdown = '"+ $(this).attr("data-dropdownbtn") + "']");
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
    //         $(".dropdown_btn_").removeClass("active");
    //         $("[data-dropdown]").removeClass("active");
    //         $("[data-dropdown]").css({
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
    //         $("[data-dropdown]").removeClass("active");
    //         $("[data-dropdownbtn], .select_input").removeClass("active");
    //         setTimeout(function() {
    //             $("[data-dropdown]").css({
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
    //     parentBlock.find("[data-dropdownbtn]").removeClass("active");
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

    $(".active_val").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".dropdown_select");
        if(parentBlock.hasClass("active")) {
            parentBlock.removeClass("active");
        } else {
            $(".dropdown_select").removeClass("active");
            parentBlock.addClass("active");
        }        
    });

    $(".vals_list li a").on("click", function(e) {
        e.preventDefault();
        var value = $(this).text();
        parentBlock = $(this).closest(".dropdown_select");
        var activeValue = parentBlock.find(".active_val");
        activeValue.text(value);
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_select");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".dropdown_select").removeClass("active");
        }
    });

    // ----------------------

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

    // -----------------

    $("[data-dropdown-box-link]").each(function() {
        if($(this).hasClass("active")) {
            dropdownBox = $("[data-dropdown-box = '"+$(this).attr("data-dropdown-box-link")+"']");
            dropdownBox.css({
                "display" : "block"
            });
        }
    });

    $("[data-dropdown-box-link]").on("click", function(e) {
        e.preventDefault();
        dropdownBox = $("[data-dropdown-box = '"+$(this).attr("data-dropdown-box-link")+"']");
        if( dropdownBox.is(":hidden") ) {
            dropdownBox.slideDown(300);
            $(this).addClass("active");
        } else {
            dropdownBox.slideUp(300);
            $(this).removeClass("active");
        }
    });

    // ------------------

    $('.masonry').masonry({
      itemSelector: '.grid_item'
    });

    // ------------------

    $(".dropdown_item").each(function() {
        if($(this).find(".dropdown_content").html() != "") {
            $(this).addClass("ready");
        }
    });

    $(".dropdown_title").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".dropdown_item");
        if(parentBlock.hasClass("ready")) {
            dropdownContent = parentBlock.find(".dropdown_content");
            if(dropdownContent.is(":hidden")) {
                dropdownContent.slideDown(300);
                parentBlock.addClass("active");
            } else {
                dropdownContent.slideUp(300);
                parentBlock.removeClass("active");
            }
        }
    });

    // ----------------------
    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn") && countVal > 0 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 0;
        }
        countInput.val(countVal);
        if(parentBlock.hasClass("goods_count")) {
            countTotalPrice();
        }
    });

    $(".goods_count input").on("keyup", function(e) {
        e.preventDefault();
        countTotalPrice();
    });

    $(".good_price_item .close_3").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".good_price_item").remove();
        countTotalPrice();
    });

    // -------------------

    $("[data-dropdown-btn]").on("click", function(e) {
        e.preventDefault();
        dropdownItemName = $(this).attr("data-dropdown-btn");
        dropdownItem = $("[data-dropdown-box = '"+dropdownItemName+"']");
        if(dropdownItem.is(":hidden")) {
            dropdownItem.slideDown();
            $(this).addClass("active");
        } else {
            dropdownItem.slideUp();
            $(this).removeClass("active");
        }
    });

    // -------------------

     $(".page_nav a").click(function(e) {
        e.preventDefault();
        var hrefAttr = $(this).attr("href");
        var visibleBlock = $(hrefAttr);
        parentBlock = $(this).closest(".page_nav");
        parentBlock.find("a").removeClass("active_scroll");
        $(this).addClass("active_scroll");
        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top
        }, 500);
    });

    // -------------------

    if( $(".news_slider").length > 0 ) {
        $(".news_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: false,
            speed: 1200,
            infinite: true,
            slidesToScroll: 1,
            swipeToSlide: true,
            variableWidth: true
        });
    }

    // ------------------

    $( ".float_thumb" ).bind({
      mouseenter: function() {
        parentBlock = $(this).closest(".error_page_content");
        parentBlock.find(".error_page_message").addClass("hide");
      },
      mouseleave: function() {
        parentBlock.find(".error_page_message").removeClass("hide");
      }
    });

    // -------------------

    $(".events_slider").mCustomScrollbar({
        scrollButtons:{
            enable:true
        },
        axis:"x"
    });

});