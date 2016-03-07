(function(){
	var box = $('div.box');
		//fontSize = box.css('font-size');
		//console.log(fontSize); // 16px
		//console.log(typeof(fontSize)); // string
		//var fontSize = parseInt( box.css('font-size'), 10 ); // 10 не обовязково

	$('button').on('click', function(){
		// examples:
		//box.css('font-size','25px'); // пряме присвоєння
		//box.css('font-size', fontSize += 5);
		//замість fontSize += 5 можна писати '+=5', тоді змінна fontSize не потрібна
		//box.css('font-size', "-=1").css('color', 'white');
		/*box.css({
			'fontSize': '+=5',
			'color': 'white'
		});*/// те саме але анімовано:
		/*box.animate({
			'fontSize': '+=5',
			'width': '+=300'
		}, 500, 'linear'); // swing може бути зачість linear*/
		/*
		box.animate({
			'fontSize': '+=5'
		}, {
			duration: 500,
			complete: function() {
				console.log('completed'); // виведе коли закінчиться виконання
			},
			step: function() {
				console.log(this); // кількість кроків = cкільки разів викличеться
			}
		});*/
		box
			.animate({
				'fontSize': '+=5'
			}, { duration: 500})
			.animate({ 'top': 750}, {duration: 3000, queue: true} );// буде false будуть виконуватися одночасно
	});
})();