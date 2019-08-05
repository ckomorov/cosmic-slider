
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

function initWorkSlider() {
	const $workSlider = $('.js-work-slider'),
		  $slide1 = $workSlider.find('.js-slide-1').html(),
		  $slide2 = $workSlider.find('.js-slide-2').html(),
		  $slide3 = $workSlider.find('.js-slide-3').html();

	$workSlider.html(' ');
	$('<div>').appendTo($workSlider).append($slide1).append($slide2).append($slide3);
	$('<div>').appendTo($workSlider).append($slide2).append($slide3).append($slide1);
	$('<div>').appendTo($workSlider).append($slide3).append($slide1).append($slide2);	
	$workSlider.slick({
		fade: true,
		prevArrow: `<span class="work-arrow is-prev">
                  <img src="./build/img/arrow_rev.svg" width="18" height="14">
                </span>`,
    	nextArrow: `<span class="work-arrow is-next">
                  <img src="./build/img/arrow.svg" width="18" height="14">
                </span>`	
	});
}

$('document').ready(function() {

	initPageSlider();
	initWorkSlider();
	
	


	
});