// вставляє <h4> пред <p> який є 3-м елементом, тобто перед 2-м <p>
$('<h4></h4>', {
	text: 'Hello from h4 insertBefore',
	class: 'myClass'
}).insertBefore('p:nth-child(3)');

//тут вставляє <h4> після <h1>
//різниця між insertAfter i after - insertAfter - вставляє тег, after - вставляє текст

$('<h4></h4>', {
	text: 'Hello from h4 insertAfter',
	class: 'myClass'
}).insertAfter('h1');