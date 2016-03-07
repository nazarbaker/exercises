$('ul').addClass('myClass');
$('ul.myClass').children('li:nth-child(2)').css('color', 'red');
$('ul.myClass').children('li').eq(2).prev().text('lalala');
$('#outside').closest('ul').removeClass('myClass');