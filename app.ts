type Combinable =
	| number
	| string

type ConversionDescriptor =
	| 'as-number'
	| 'as-text'

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result
	if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
		result = +input1 + +input2
	} else {
		result = input1.toString() + input2.toString()
	}
	return result;
}

console.log(combine(3, 5, 'as-number'))

interface Person {
	name: string,
	age: number

	greet(phrase: string): void
}

let user1: Person
user1 = {
	name: 'Freddy',
	age: 21,
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name)
	}
}
user1.greet('Hi I am')