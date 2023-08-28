$(document).ready(function () {
  $('.news-slider').slick({
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	adaptiveHeight: true,
  });

  $('.first-screen-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	adaptiveHeight: true,
	fade: true,
	autoplay: true,
	swipe: false,
	autoplaySpeed: 3000,
	pauseOnFocus: false,
  });

  $('.first-screen-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let now_index = currentSlide;
    let nav_text = $('.slider-navtext__item');
    let nav_img = $('.slider-navimg__item');
    $(nav_text).removeClass('active');
    $(nav_img).removeClass('active');

    nav_text = nav_text[now_index];
    nav_img = nav_img[now_index];

    $(nav_text).addClass('active');
    $(nav_img).addClass('active');
  });

  $('.change-slider-index').on('click', function() {
  	let index_thiw = $(this).data('index');
  	$('.first-screen-slider').slick('slickGoTo', index_thiw);
  	return false;
  })
})