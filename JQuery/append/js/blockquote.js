// тут копіює текст <span> в цитату <blockquote>
	var co = $('span.co').each(function(){
		var $this = $(this);

		$('<blockquote></blockquote>', {
			class: 'co',
			text: $(this).text()
		}).prependTo( $(this).closest('p') );
	});

// можна записати так
	/*var co = $('article').find('span.co').each(function(){
		var $this = $(this);

		$('<blockquote></blockquote>', {
			class: 'co',
			text: $(this).text()
		}).prependTo( $(this).closest('p') );
	});*/