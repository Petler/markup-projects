jQuery(function() {
    $(".nav-opener").click(function() {
        $("body").toggleClass("nav-active")
    });
});
$('.hoverButton').hover(function(){
    $(this).parent('.block').toggleClass('hoverBox')
});

$(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600,
        controls: true,
        pager: false
    });
});

