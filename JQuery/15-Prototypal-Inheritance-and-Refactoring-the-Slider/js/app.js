(function(){
    function Slider(container, nav) {
        this.container = container;
        this.nav = nav.show(); // тут в css приховані кнопки

        this.imgs = this.container.find('img'); // буде масив фотографій
        this.imgWidth = this.imgs[0].width;// 600
        this.imgsLen = this.imgs.length;

        this.current = 0;
    }

    Slider.prototype.transition = function(coords) {
        this.container.animate({
            'margin-left': coords || -(this.current * this.imgWidth)
        });
    };

    Slider.prototype.setCurrent = function( dir ) {
        // тут нище цікава штука ~~true === 1, тобто якщо dir === 'next' буде true
        // this.current буде 1 якщо ні то -1
        var pos = this.current;
        this.current += ~~(dir === 'next') || -1;

        this.current = (this.current < 0) ? this.imgsLen - 1 : this.current % this.imgsLen;
        
        return pos;
    };

     // тут міняємо css overflow: scroll;
    var container = $('div.slider').css('overflow', 'hidden').children('ul');
    //
    var slider = new Slider( container, $('#slider-nav'));
    
    slider.nav.find('button').on('click', function(){
        slider.setCurrent($(this).data('dir'));
        slider.transition();
    });

})();