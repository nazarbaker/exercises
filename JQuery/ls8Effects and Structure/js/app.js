(function(){
	$('html').addClass('js');
	
	// обєкт для роботи з формою
	var contactForm = {
		// визначаю блок
		container: $('#contact'),
		// визначаю ефект появи форми
		config: {
			effect: 'slideToggle',
			speed: 500
		},
		// init button
		init: function(config) {
			// не вїхав звідки береться .extend
			//console.log(this.config);
			$.extend(this.config, config);

			$('<button></button>', {
				text: 'Contact Me'
			})
				.insertAfter( 'article:first' )
				.on('click', this.show);
		},
		// функція що показує блок
		show: function() {
			var cf = contactForm;
            var container = cf.container;
            var config = cf.config;
			//тут this присвоюється contactForm.container = #contact
			//contactForm.close.call(contactForm.container);// скорочуємо:
            if(container.is(':hidden')){
                contactForm.close.call(container);
                container[config.effect](config.speed);
            }
			//contactForm.container.slideToggle(500);
			//contactForm.container.show(500);
		},
		// функція приховує блок
		close: function(){
			var $this = $(this); // #contact
            // тут перевіряє, якщо є елемент span з класом то зупиняє виконання функції, щоб вони не повторювалися 
            if($this.find('span.close').length) return;

			$('<span class=close>X</span>')
				.prependTo(this)
				.on('click', function() {
					//this = span
					//$this = #contact
					$this[contactForm.config.effect](contactForm.config.speed);
					//$this.hide(500);
				});
		}
	};
	contactForm.init({
		//effect: 'fadeToggle',
		speed: 2000
	});
})();