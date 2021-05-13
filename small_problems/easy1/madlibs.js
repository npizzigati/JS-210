// Madlibs
// Madlibs is a simple game where you create a story template
// with "blanks" for words. You, or another player, then
// construct a list of words and place them into the story,
// creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a
// verb, an adverb, and an adjective, and injects them into a
// story that you create.

// Example:

// Copy Code
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!

// input: (4 Strings) -- console prompts -- or function input
// output: String logged to console

// requirements:
// output is a story that inserts the user-entered words into
// blanks provided for a noun, verb, adjective and adverb

function madlibs(adjective, noun, verb, adverb) {
  story = `The ${adjective} ${noun} ${verb} ${adverb}`;
  console.log(story);
}

