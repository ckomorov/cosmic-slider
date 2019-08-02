
function initPageSlider() {

	const $slider = $('.js-page-slider');

	$slider.slick({
		arrows: false,
		vertical: true
	});

	$slider.mousewheel(function(e){
		e.preventDefault();
		if (e.deltaY > 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}

	});

	$slider.swipe({
		swipe: function(e, direction, duration, fingerCount, fingerData){
			if (direction == 'up') {
				$slider.slick('slickNext');
			} else {
				$slider.slick('slickPrev');
			}
		}, threshold: 50 
	});
}




$('document').ready(function() {
	initPageSlider();
});