function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

/**
 * Solution
 * 1-Identify all the LHS look-ups (there are 3!).

    c = .., a = 2 (implicit param assignment) and b = ..

   2-Identify all the RHS look-ups (there are 4!).

    foo(2.., = a;, a + .. and .. + b
 */