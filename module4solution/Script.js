/**
 * script.js — Module 4 Assignment Solution
 *
 * Steps completed:
 *  1. Declare and populate the 'names' array.
 *  2. Loop over the array using a for loop.
 *  3. Inside the loop, check if the first letter of each name is 'j' or 'J'.
 *     - If yes  → call sayGoodbye(name)
 *     - If no   → call sayHello(name)
 *
 * External libraries used (both had bugs — see their files for fix notes):
 *   - sayHello.js   (FIX: function was misspelled as 'sayHllo')
 *   - sayGoodbye.js (FIX: missing closing brace caused syntax error)
 */

var names = [
    "Jenny",
    "Alice",
    "John",
    "Bob",
    "Jane",
    "Charlie",
    "Jake",
    "Diana"
];

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0);

    if (firstLetter === "j" || firstLetter === "J") {
        sayGoodbye(name);   // names starting with j/J
    } else {
        sayHello(name);     // all other names
    }
}