/*
Write a function createHelloWorld.
It should return a new function that always returns "Hello World".

const f = createHelloWorld();
f(); // "Hello World"
*/

const createHelloWorld = function (para) {
	return function (...args) {
		return "Hello World";
	};
};
const input = [{}, null, 42];
const result = createHelloWorld(input);
console.log(result());
