/*
* TABLE OF CONTENTS
*
* List JS file
* global PIN
*/

/* > List JS file */

// '/vendor/jquery-3.1.1.js',
// '/vendor/jquery.slimscroll.min.js',


$('.magazine .wrap').bxSlider({
	controls: false,
	slideWidth: 105,
	minSlides: 3,
	maxSlides: 3,
	slideMargin: 40
});

$('.box-one-story .wrap').bxSlider({
	controls: false,
	minSlides: 1,
	maxSlides: 1
});

$('.fullSize-box-02 .wrap').bxSlider({
	minSlides: 1,
	maxSlides: 1,
	nextSelector: ".fullSize-box-02 .btn-next",
	prevSelector: ".fullSize-box-02 .btn-prev"
});

$('.abf .col-560 .wrap').bxSlider({
	auto : true,
	controls: false,
	minSlides: 1,
	maxSlides: 1
});


var bxActiveItem;
$('.bxslider a').hover(function(e){
    bxActiveItem = $(this);
});
$('.bxslider').parent().click(function(e){
   if(bxActiveItem != null) window.location = bxActiveItem.attr('href');
});

$('.slider-nav .wrap').bxSlider({
	minSlides: 3,
	maxSlides: 3,
	slideWidth : 280,
	nextSelector: ".slider-nav .btn-next",
	prevSelector: ".slider-nav .btn-prev",
    onSlideBefore: function() { bxActiveItem = null;}
});


$('.portrait-box .wrap').bxSlider({
    auto : true,
    pause : 10000,
	controls: false,
	slideWidth: 300,
	minSlides: 1,
	maxSlides: 1,
	onSlideBefore: function() { bxActiveItem = null;}
});

$(function(){
	$('.abf .list-stories .wrap').slimscroll({
	  height: '238px'
	});
});