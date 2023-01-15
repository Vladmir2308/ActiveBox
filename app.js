$(function(){
    let header = $('#header');
    let introH = $('#intro').innerHeight();
    /* Fixed Header */
    $(window).on('scroll resize load', function(){
        let scroll = $(this).scrollTop();

        if (scroll > introH - 170){
            header.addClass('fixed');
            $('#nav').addClass('fixed');
        }
        else{
            header.removeClass('fixed');
            $('#nav').removeClass('fixed');
        }
    });

    /* Smooth scroll */
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let dataItem = $(this).data('scroll');
        let scrollOffset = $(dataItem).offset().top;

        console.log(scrollOffset);

        $('html, body').animate({
            scrollTop: scrollOffset - 90
        }, 1000);

        $('#toggle').removeClass('active');
        $('#nav').removeClass('nav--toggle');
    });

    /* Toggle */
    $('#toggle').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('nav--toggle');
    });

    /* Slider */
    $('#reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});
