(function(){
	$('article').append("heloo from the Append");
	$('article').prepend("heloo from the Prepend");
	//$('h1').after("heloo from the After");
	$('p').first().after('Hello first after p');
	$('<h2 class="myClass">Hi from appendTo</h2>').appendTo('article');
	$('<h3></h3>', {
		text: 'Hello from h3 prependTo',
		class: 'myClass'
	}).prependTo('article');
	// insert text тут додасть текст перед <span> кожного <p>  
	var co = $('span.co').each(function(){
		$(this).closest('p').prepend('Say say say');
	});
})();