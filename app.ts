enum SwearWords { BULLSHIT } // typeof: number
// custom type here
type Combinable =
	| number
	| string
	| boolean
// function to explore adding/ combining things
function addShit(thingOne: Combinable, thingTwo: Combinable) {
	return +thingOne + +thingTwo
}
// my logs to visualize shit
console.log(addShit(420, 420))
console.log(addShit('freddy', 'silber'))
console.log(addShit(true, 'mrsir'))
console.log(typeof SwearWords.BULLSHIT)
console.log(SwearWords.BULLSHIT)
console.log(addShit(SwearWords.BULLSHIT, '69'))

const mystring = 'we dont need to make this string have a \'string\' type because its already being assigned to a string immediatly and is a const'
console.log(mystring)
// Same with this number const, we dont need to set a type because typescript already knows this will be of type number since it is defined and assigned to a number
const myNumber = 21
console.log(myNumber)