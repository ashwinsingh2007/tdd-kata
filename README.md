# String Calculator TDD Kata

This contains a TypeScript implementation of the String Calculator TDD Kata. It demonstrates the Test-Driven Development (TDD) approach, starting from the simplest case and incrementally adding features along with corresponding tests.

## Requirements

- **Node.js version:** 20 (Recommended)
- **Package manager:** Yarn

## Installation
```bash
yarn
```

## Run the build and tests:
```bash
yarn build
```
The yarn build command will run the tests as part of the build process, ensuring that code changes pass all test cases.


## What Has Been Covered
- Return 0 for an empty string.
- Return the number itself if the string contains only one number.
- Sum two or more numbers separated by commas.
- Handle newlines as well as commas as delimiters.
- Support different, custom-defined delimiters specified in the format //[delimiter]\n.
- Throw an exception if negative numbers are included, listing all negative numbers in the exception message.

## Approach
- The approach taken was strictly Test-Driven Development (TDD):
    - Write a failing test: Start with a test defining the desired behavior.
    - Write the minimal code to pass the test: Implement just enough code to make the test pass.
    - Refactor: Improve the code while keeping all tests green, ensuring maintainability and clarity.