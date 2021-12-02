# Game 01

Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N. For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].

## Challenge
You're required to create a function that receives an array (M) and integer value (N). This function has to return an array of the first possible solution.

## solution
upon receipt of the array, an ascending sort is performed, taking advantage of JavaScript's sort function. next, a while loop of the arrangement is made, looking for the largest and smallest number closest to the result, in order to solve efficiently, expecting to receive larger arrangements.