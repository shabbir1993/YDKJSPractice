(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"

function foo() {  }

// `foo` function reference expression,
// then `()` executes it
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){ })();

var a = 42;

(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();

console.log( a );		// 42

//IIFE to return values
var x = (function IIFE(){
	return 42;
})();

x;	// 42