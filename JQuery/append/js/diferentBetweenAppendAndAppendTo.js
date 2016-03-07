(function(){
    // 
    $('div').append('<article>');
    $('<div>').appendTo('article');
    //
    $('p').before('<span>This tag before tag p</span>');
    $('p').after('<span>This tag after tag p</span>');
    $('h1').first().after('<h4>Hello first after p</h4>');
})();