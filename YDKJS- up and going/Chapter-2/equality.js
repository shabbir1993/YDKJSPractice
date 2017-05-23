var a = "42";
var b = 42;

a == b;			// true
a === b;		// false

//Equality Exceptional Case
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false