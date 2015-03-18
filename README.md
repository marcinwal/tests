This folder is for small tech tests in different technologies.

This particual task was to extract DOM elements not using query nore jquery given a selector like: div#some_id.some_class

1st task was to extract TAG,ID and CLASS from a selector.
I did by using RegEx and stored results in Object with field names being the methods I needed to call later on particular selector.
(queryElements() function)

2nd I found selectors and stored them in Object again to do cross checking later.
(fetchDOMObjects() function)

3rd cross checking I did by writing a small intersection function which takes 2 arrays and returns 
  undefined if both arrays are undefined
  non undefined array if the other array in undefined
  array of objects appearing in both arrays
(intersection() function)

4th I used intersection for finding the result;
    It can be easily extended to more selectors.
    I would need to change a bit logic of final actions(looping throug selectors arrays looking for their intersections one by another).

All tests passed; I added line 47 to be in line with spec(empty array was expected) although test passed without that line.



