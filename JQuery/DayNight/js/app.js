$(document).ready(function(){
	$('button').click(function(){
		$(this).siblings('button').removeAttr('disabled');
		var stylesheet = $(this).data('file');
		$('link').attr('href', 'css/' + stylesheet + '.css');
		$(this).attr('disabled', 'disabled');
	});
});