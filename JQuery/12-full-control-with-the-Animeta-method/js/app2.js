(function(){
	var box = $('div.box2');
		//$(window).width(); - ширина вікна
		// box.outerWidth() - ширина блоку з падінгами
		var winWidth = $(window).width() / 2 - box.outerWidth() / 2;
		var winHeight = $(window).height() / 2 - box.outerHeight() / 2;
		console.log(winWidth);
		console.log(box.width());
		console.log(box.outerWidth());
		console.log($(window).height());

	// поставить блок по середині
	$('button').on('click', function(){
		//box.css == box.animate(те саме але з анімаціє) 
		box.animate({
			'left': winWidth,
			'top': winHeight,
			'position': 'absolute'
		})
			.animate({
				'top': winHeight
			}, { duration: 2000, queue: false})
			.addClass('rounded');
	});
})();