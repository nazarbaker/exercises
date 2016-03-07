// створює функцію
jQuery.fn.flash = function(speed, easing, callback) {
	var $this = $(this); // для простоти і наглядності
	return $this.slideDown(1000, function(){  // працює без return? 
		$this.delay(2000).slideUp(500);
	});
	//console.log('hi');
    //return this.animate(props, speed, easing, callback);
};

var content = $('div.content');
content.hide();

$('h1').on('click', function() {
	content.flash();  // скорочення нижнього рядка
	//$(this).next('div.content').flash();
});


/*jQuery.fn[name] = function(speed, easing, callback) {
    return this.animate(props, speed, easing, callback);
};*/// з документації