$(document).ready(function(){
	$('#container').delegate('h2', 'click', function(){
		$(this).clone().appendTo('body');
	});
});