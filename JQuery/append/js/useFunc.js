// тут елемент який йде пthtl першого <p> стане після нього
$('p').eq(0).after(function(){
	return $(this).prev();
});