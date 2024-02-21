# node-js-vac
Repository for learning and experimenting with js, node.js, next.js

## What is JavaScript?
JavaScript is a high-level programming language that conforms to the ECMAScript specification. 

It is a dynamically-typed language. This means that you don't have to declare the data type of your variables before using them. 

It was developed by Netscape Corporation and later sponsored by Sun Microsystems.

JavaScript, alongside HTML and CSS is one of the core technologies of the world wide web.

It can be used to build server side applications

It is also used in mobile app development to create cross platform apps that can run on both iOS and android and also create desktop applications.

## Data Types
Primitive (Written as an actual value)
- String: Sequence of charachters that represents text.
- Number: Integers and floating point numbers.
- Boolean: Logical entities (true or flase).
- Undefined: Value that is not assigned to the variable.
- Null: Null Value
- Bigint: Integer value than what the number data type can hold.
- Symbol: Value that is unique and unchangable.

Non Prmitve (Collection of values)
- Objects: Complex data type, key/property-value pairs.
- Arrays: Collection of items in a single variable.
- Functions: A function is a collection of code instructions that performs a specific task. 

## Operators
An operator is a special symbol used to perform operations on the value and variables
- Assignment
- Arithmetic
- Comparison
- Logical
- String
- Other

## HTTP Methods
- GET: for reading data
- POST: to publish/create entities
- DELETE: to delete entitites
- PUT: to update existing entities
- HEAD: 

## Seperation of Concerns and Promise
Separation of Concerns (SoC) is a fundamental principle in software engineering and design aimed at breaking down complex systems into smaller, more manageable parts. The goal is to organize a system’s components in a way that each part addresses a single concern, or a cohesive aspect of functionality, rather than mixing multiple concerns together.

Promise: Is an object in js with three states; pending, resolved, rejected. The states depend on current order of statements.

## Difference between undefined and Null
Undefined: In JavaScript, undefined typically means that a variable has been declared but has not been assigned a value. It can also be returned when attempting to access an object property that does not exist, or when a function does not explicitly return a value. It represents the absence of any value or lack of existence.

Null: On the other hand, null is a value that represents the intentional absence of any value. It is often used as an explicit indication that a variable does not contain a meaningful value or that an object property intentionally does not exist.