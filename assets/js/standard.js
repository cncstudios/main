// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="transform:translateY(-150vh);";
          document.getElementById('body-container').style.opacity="1";
      },100);
  }
}

window.addEventListener("keydown", function(e) {
    if([37, 39].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$(document).ready(function (){
    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    var vh50 = ($(window).outerHeight() / $(window).outerWidth()*50 + "vw");
    $('.cover-wrapper, .cover-image, .cover-title').css({ height: vh100 });

    // Mobile Control //
    if (($(window).width())/($(window).height()) < 40/31) {
        $('.page-split').css({ minHeight: 'auto' });
        $('.page, .dark-page').css({ minHeight: 'auto' });
        // Slick Controls //
        $(".project-display").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            asNavFor: '.project-content',
            autoplay: true,
            autoplaySpeed: 4000
        });
        $(".project-content").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.project-display',
            arrows: false,
            fade: true
        });
        $(".artwork-display").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            variableWidth: true,
            asNavFor: '.artwork-content',
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 3000
        });
        $(".artwork-content").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.artwork-display',
            arrows: false,
            fade: true
        });
        $('.artwork-img').css({ height: '40vw' }).css({ width: 'auto' });
    }
    else {
        $('.page-split').css({ minHeight: vh100 });
        $('.page, .dark-page').css({ minHeight: vh100 });
        // Slick Controls //
        $(".project-display").slick({
            lazyLoad: 'ondemand',
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            asNavFor: '.project-content',
            autoplay: true,
            autoplaySpeed: 4000
        });
        $(".project-content").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.project-display',
            arrows: false,
            fade: true
        });
        $(".artwork-display").slick({
            lazyLoad: 'ondemand',
            dots: true,
            infinite: true,
            centerMode: true,
            variableWidth: true,
            asNavFor: '.artwork-content',
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 3000
        });
        $(".artwork-content").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.artwork-display',
            arrows: false,
            fade: true
        });
        $('.artwork-img').css({ height: vh50 }).css({ width: 'auto' });
    }

    // Nav Control //
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $(".section-1").offset().top
        }, 1200, 'easeInOutExpo');
    });
    // $("#nav-img").click(function (){
    //     $('html, body').stop(true, false).animate({
    //         scrollTop: $("body").offset().top
    //     }, 1200, 'easeInOutExpo');
    // });
    // $("#tab1").click(function (){
    //     $('html, body').stop(true, false).animate({
    //         scrollTop: $(".section-1").offset().top + 50
    //     }, 1200, 'easeInOutExpo');
    // });
    // $("#tab2").click(function (){
    //     $('html, body').stop(true, false).animate({
    //         scrollTop: $(".section-2").offset().top + 50
    //     }, 1200, 'easeInOutExpo');
    // });
    // $("#tab3").click(function (){
    //     $('html, body').stop(true, false).animate({
    //         scrollTop: $(".section-3").offset().top + 50
    //     }, 1200, 'easeInOutExpo');
    // });
    // $("#tab4").click(function (){
    //     $('html, body').stop(true, false).animate({
    //         scrollTop: $(".section-4").offset().top + 50
    //     }, 1200, 'easeInOutExpo');
    // });

    // Tab Scroll CSS Control //
    // $(window).scroll(function(){
    //     if($(window).scrollTop() < $(".section-1").offset().top - 50 ){
    //         $(".nav-wrapper").removeClass('nav-wrapper-add');
    //         document.title = 'Christian Nguyen';
    //     }else{
    //         $(".nav-wrapper").addClass('nav-wrapper-add');
    //     }
    //     if($(window).scrollTop() >= $(".section-1").offset().top - 50  && $(window).scrollTop() < $(".section-2").offset().top - 50 ){
    //         $("#tab1").css("border-bottom","2px solid #7b2d2b");
    //         document.title = 'Christian Nguyen | Developer';
    //     }else{
    //         $("#tab1").css("border-bottom","2px solid rgba(0,0,0,0)");
    //     }
    //     if($(window).scrollTop() >= $(".section-2").offset().top - 50  && $(window).scrollTop() < $(".section-3").offset().top - 50 ){
    //         $("#tab2").css("border-bottom","2px solid #7b2d2b");
    //         document.title = 'Christian Nguyen | Projects';
    //     }else{
    //         $("#tab2").css("border-bottom","2px solid rgba(0,0,0,0)");
    //     }
    //     if($(window).scrollTop() >= $(".section-3").offset().top - 50  && $(window).scrollTop() < $(".section-4").offset().top - 50 ){
    //         $("#tab3").css("border-bottom","2px solid #7b2d2b");
    //         document.title = 'Christian Nguyen | Business';
    //     }else{
    //         $("#tab3").css("border-bottom","2px solid rgba(0,0,0,0)");
    //     }
    //     if($(window).scrollTop() >= $(".section-4").offset().top - 50  && $(window).scrollTop() < $(".section-5").offset().top - 50 ){
    //         $("#tab4").css("border-bottom","2px solid #7b2d2b");
    //         document.title = 'Christian Nguyen | Artwork';
    //     }else{
    //         $("#tab4").css("border-bottom","2px solid rgba(0,0,0,0)");
    //     }
    // });

    // Article Hover //
    $("div.article-hover").mouseover(function (event){
        $(event.target).closest("div.article-c-hover").addClass("article-container-hover");
    });
    $("div.article-hover").mouseout(function (event){
        $(event.target).closest("div.article-c-hover").removeClass("article-container-hover");
    });

    // Animated Arrow //
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(300)
                .delay(800)
                .fadeOut(300, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});