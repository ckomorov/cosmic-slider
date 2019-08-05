
function initPageSlider() {

	const $slider = $('.js-page-slider');

	$slider.slick({
		arrows: false,
		vertical: true,
		dots: true
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

	chooseTextOnFirstSlide();
	
}


function chooseTextOnFirstSlide() {

	const $ps_top_1 = $('.page-slide-1-top');

	$('#tw-1').on('mouseover', function(){
		$ps_top_1.addClass('left');
		$ps_top_1.removeClass('middle', 'right');
	});

	$('#tw-2').on('mouseover', function(){
		$ps_top_1.addClass('middle');
		$ps_top_1.removeClass('right', 'left');
	});

	$('#tw-3').on('mouseover', function(){
		$ps_top_1.addClass('right');
		$ps_top_1.removeClass('left', 'middle');
	});
}



$('document').ready(function() {

	initPageSlider();

	
	


	
});