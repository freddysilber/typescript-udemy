var SwearWords;
(function (SwearWords) {
    SwearWords[SwearWords["BULLSHIT"] = 0] = "BULLSHIT";
})(SwearWords || (SwearWords = {})); // typeof: number
// function to explore adding/ combining things
function addShit(thingOne, thingTwo) {
    return +thingOne + +thingTwo;
}
// my logs to visualize shit
console.log(addShit(4, 993));
console.log(addShit('shit', 'fuck'));
console.log(addShit(true, 'cunt'));
console.log(typeof SwearWords.BULLSHIT);
console.log(SwearWords.BULLSHIT);
console.log(addShit(SwearWords.BULLSHIT, '69'));
var mystring = 'we dont need to make this string have a \'string\' type because its already being assined to a string';
console.log(mystring);
var myNumber = 21;
console.log(myNumber);
