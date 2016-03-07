/* // 1 example
function doSomething(e){
	e.preventDefault(); //зупиняє перехід по лінку
	console.log(e); // це обєкт події
	console.log(this);// this вказує на контекст виклику
}

$('a').on('click', doSomething); // тут this = <a href="http://tutsplus.com">Cleack Me</a>
*/

// 2 example
/*
var obj = {
    doIt: function(e) {
        e.preventDefault();
        console.log(this);
    }
};

$('#refer').on('click', obj.doIt);
//$('#refer').on('click', $.proxy(obj.doIt, obj) );
*/
// 3 example

var obj = {
    doIt: function() {
        console.log(this);
    }
};

$('#refer').on('click', function(e) {
    //obj.doIt();//виведе обєкт 

    //this = anchor that was clicked
    obj.doIt.call(this);

    e.preventDefault();
});