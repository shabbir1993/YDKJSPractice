var a =2; 
console.log(a);

// enclosed scope
function foo(a) {
	console.log( a ); // 2
}

foo( 2 );