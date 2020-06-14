$(document).ready(function() {
	$('.nxt').on('click',function () {
		var currentImg = $('.active');
		var nextImg = currentImg.next();

		if(nextImg.length){
			currentImg.removeClass('active').css('z-index, -10');
			nextImg.addClass('active').css('z-index',10);
			// console.log(nextImg.length);
		}
	});

	$('.pre').on('click',function () {
		var currentImg = $('.active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
			currentImg.removeClass('active').css('z-index, -10');
			prevImg.addClass('active').css('z-index',10);
		}
		
	});
	$('.nxt2').on('click',function () {
		var currentImg2 = $('.active2');
		var nextImg2 = currentImg2.next();

		if(nextImg2.length){
			currentImg2.removeClass('active2').css('z-index, -10');
			nextImg2.addClass('active2').css('z-index',10);
			console.log(nextImg2.length);
		}
	});

	$('.pre2').on('click',function () {
		var currentImg2 = $('.active2');
		var prevImg2 = currentImg2.prev();

		if(prevImg2.length){
			currentImg2.removeClass('active2').css('z-index, -10');
			prevImg2.addClass('active2').css('z-index',10);
			console.log(prevImg2.length);
		}

	});


});
