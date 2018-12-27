jQuery(function() {
	$(".nav-opener").click(function() {
		$("body").toggleClass("nav-active")
	});
});

$(function(){
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
			slideWidth: 1125,
			minSlides: 1,
			maxSlides: 1,
			speed: 800,
		});
	});

