(function(){
    // тут присвоюється css до div.slider, а в змінну записуються ul
    var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs[0].width, // присвоюється ширина першого зображення 600
        imgsLen = imgs.length, // кількість зображень 4
        current = 1,
        totalImgsWidth = imgsLen * imgWidth; // 2400

    $('#slider-nav').show().find('button').on('click', function() {
        var direction = $(this).data('dir');  // .attr('data-dir'); те саме що і data('dir');
        var loc = imgWidth;

        /*if(direction === 'next') {
            current = current + 1;
        } else {
            current = current - 1;
        }*/
        // те саме що і з верху:
        (direction === 'next') ? ++current : -- current;
        
        if (current === 0) { // тут типу якщо current === 0 то йому присвоюють 4, щоб були в межах 1-4
            current = imgsLen;
            loc = totalImgsWidth - imgWidth; // 1800
            direction = 'next';
        } else if ( current - 1 === imgsLen) { // тут типу якщо current === 5 то йому присвоюють 1; reset
            current = 1;
            loc = 0;
        }

        transition(sliderUL, loc, direction);


    });

    function transition(container, loc, direction) {
        var unit;

        if(direction && loc !== 0) {
            unit = (direction === 'next') ? '-=' : '+=';
        }

        container.animate({
            'margin-left': unit ? (unit + loc) : loc // тут перевіряє unit на underfined і присвоює відповідні значення margin-left
        });
    }
})();