const Question = [
  {
    question: "What is the correct syntax to print 'Hello, World!' in JavaScript?",
    options: [
      "console.log('Hello, World!')",
      "print('Hello, World!')",
      "echo('Hello, World!')",
      "write('Hello, World!')"
    ],
    answer: "console.log('Hello, World!')"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      "To enable ECMAScript 6 features",
      "To throw errors for unsafe actions",
      "To prevent memory leaks",
      "To increase performance"
    ],
    answer: "To throw errors for unsafe actions"
  },
  {
    question: "What will the following code output: `console.log(2 + '2')`?",
    options: ["22", "4", "NaN", "undefined"],
    answer: "22"
  },
  {
    question: "Which of the following is a valid JavaScript variable name?",
    options: ["1variable", "_variable", "var-1", "var@1"],
    answer: "_variable"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The function being executed",
      "The object that owns the method",
      "The global object",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' compares values, '===' compares values and types",
      "'==' compares types, '===' compares values",
      "'==' is used for strict equality",
      "'===' is used for loose equality"
    ],
    answer: "'==' compares values, '===' compares values and types"
  },
  {
    question: "What does the following code do: `const arr = [1, 2, 3]; arr.push(4);`?",
    options: [
      "Adds 4 to the beginning of the array",
      "Adds 4 to the end of the array",
      "Removes 4 from the array",
      "Changes the array to [4, 1, 2, 3]"
    ],
    answer: "Adds 4 to the end of the array"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create function myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: "What is the output of `console.log(typeof null)` in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    answer: "'object'"
  }
];

export default Question;