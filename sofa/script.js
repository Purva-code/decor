$(document).ready(function() {
	$('.nxt').on('click',function () {
		var currentImg = $('.active');
		var nextImg = currentImg.next();

		if(nextImg.length){
			currentImg.removeClass('active').css('z-index, -10');
			nextImg.addClass('active').css('z-index',10);
			// console.log(nextImg.length);
		}
		if(nextImg.length<=1){
			currentImg.addClass('active').css('z-index, 10');
		}
	});

	$('.pre').on('click',function () {
		var currentImg = $('.active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
			currentImg.removeClass('active').css('z-index, -10');
			prevImg.addClass('active').css('z-index',10);
		}
		if(prevImg.length<=1){
			currentImg.addClass('active').css('z-index, 10');
		}
	});
});

// $("#grey").hover(function () {
// 	$("#grey").transition({'font-size': '30px'},1000);
// });