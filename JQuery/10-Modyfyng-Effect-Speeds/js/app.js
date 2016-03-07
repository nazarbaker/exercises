$('div.content').hide();

$('h1').on('click', function(){
    $(this).next().slideDown(2000);
});