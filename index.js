function introduction(name) {
    return `Hi, my name is ${name}.`;
  }

  console.log(introduction("Alice")); // Output: "Hi, my name is Alice."
console.log(introduction("Bob")); // Output: "Hi, my name is Bob."
console.log(introduction("Charlie")); // Output: "Hi, my name is Charlie."
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introductionWithLanguage("Alice", "JavaScript")); // Output: "Hi, my name is Alice and I am learning to program in JavaScript."
console.log(introductionWithLanguage("Bob", "Python")); // Output: "Hi, my name is Bob and I am learning to program in Python."
console.log(introductionWithLanguage("Charlie", "Ruby")); // Output: "Hi, my name is Charlie and I am learning to program in Ruby."
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("Alice")); // Output: "Hi, my name is Alice and I am learning to program in JavaScript."
console.log(introductionWithLanguageOptional("Bob", "Python")); // Output: "Hi, my name is Bob and I am learning to program in Python."
console.log(introductionWithLanguageOptional("Charlie", "Ruby")); // Output: "Hi, my name is Charlie and I am learning to program in Ruby."
