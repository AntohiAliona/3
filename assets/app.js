'use strict';


$(document).ready(function () {

    /*Fixed Header*/
    let header = $('#header'),
        introH = $("#intro").innerHeight(),
        featuresH = $("#features").innerHeight(),
        scrollOffset = $(window).scrollTop();

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if ((scrollOffset > introH) || (scrollOffset >= featuresH)) {
            header.addClass("fixed"); 
        } else {
            header.removeClass("fixed");
        }
    };

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 800);
    });

    jQuery(window).scroll(function(){
        var $sections = $('section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-150;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');
            }
        })
    });

    /*Nav-toggle*/
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /*data-slider*/
    
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: true,
        arrows: false,
        dots: true,
    });
});
