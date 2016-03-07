(function(){
    var box = $('div.box');

    // тут замість fn наскільки я зрозумів любий елемент зараз box
    $.fn.FadeSlideToggle = function(speed, fn) {
        return $(this).animate({  // тут має бути return щоб можна було працювати з цим обєктом, наприклад клас при виклиці внизу
            //'height': 0, // робить висоту 0
            //opacity: 0 // робить прозорим 0 але залишають місце елементів
            'height': 'toggle', // а toggle робить display: none
            opacity: 'toggle'   // і  крім того ще одне натискання робить видимим елемент
        }, speed || 400, fn); // тут використовується швидкість зазаначену при виклику, або по дефолту
    };                   // вище визивається функція callback fn викличеться в кінці

    $('button').on('click', function(){
        box.FadeSlideToggle(2000, function() {
            console.log('complete');
        });
    });
})();