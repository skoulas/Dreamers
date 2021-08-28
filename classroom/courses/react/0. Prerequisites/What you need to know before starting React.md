# JavaScript fundamentals before learning React

- [JavaScript fundamentals before learning React](#javascript-fundamentals-before-learning-react)
  - [0 Resources](#0-resources)
  - [1. Intro](#1-intro)
  - [2. ARROW FUNCTIONS IN REACT](#2-arrow-functions-in-react)
  - [3. FUNCTIONS AS COMPONENTS IN REACT](#3-functions-as-components-in-react)

## 0 Resources

[How to learn React.js](https://www.robinwieruch.de/learn-react-js)
[JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements)

## 1. Intro

Since React is a JS library, there is no way around learning JavaScript. You cannot learn React without JavaScript or without knowing JavaScript in the first place. In comparison to other frontend solutions, React makes heavily use of JavaScript.

Learn React or JavaScript first?
You should understand at least the basics of JavaScript, often referred to as JavaScript ES5, and have decent knowledge about HTML and CSS. React also utilizes JavaScript syntax, most often referred to JavaScript ES6 and beyond (ES7, ES8, ES9). That's why it makes sense to get comfortable with at least JavaScript ES6 to learn React.

There are many people who recommend to learn web development and all JavaScript fundamentals as prerequisite before learning React. The skills they recommend to acquire go far beyond what's needed to build basic applications with React.js. A couple of them may be:

- Functions are first-class citizens in JavaScript
- bind(), apply(), and call()
- scopes and closures
- this
- Object Methods
- Array Methods
- Prototypical Inheritance -> ES6 Class
- Callbacks and Promises
- Event Loop
- Event Bubbling
- Regular Expressions
- Error Handling
- JavaScript ES6 and beyond
- Hoisting, Memoization
- Declarative vs imperative programming
- Functional vs object-oriented programming

most of JavaScript can be learned along the way when learning React, because then you experience it in context while building web applications. That's exciting and that's what drives us as human beings. So keep yourself excited while learning and don't hang around too long with the fundamentals where you cannot see the purpose without ever applying them in a real world scenario. Start to build real projects. Stay curious! Move forth and back between JavaScript and React while you learn React.

## 2. ARROW FUNCTIONS IN REACT

They are one of JavaScript's language additions in ES6 which pushed JavaScript forward in functional programming.

```javascript
// JavaScript ES5 function
function getGreeting() {
  return 'Welcome to JavaScript';
}

// JavaScript ES6 arrow function with body
const getGreeting = () => {
  return 'Welcome to JavaScript';
}

// JavaScript ES6 arrow function without body and implicit return
const getGreeting = () =>
  'Welcome to JavaScript';
```

At some point, when the differences between JavaScript ES5 functions and JavaScript ES6 functions become clear, stick to the JavaScript ES6 way of doing it with arrow functions. However, you always see that too many different syntaxes can be overwhelming for React beginners. So try to make the different characteristics of JavaScript functions clear before going all-in using them in React. In the following sections, you will see how JavaScript arrow functions are commonly used in React.

## 3. FUNCTIONS AS COMPONENTS IN REACT

React uses the best of different programming paradigms. That's only possible because JavaScript is a many-sided programming language. On the `object-oriented programming` side, React's class components are a great way of leveraging the abilities of JavaScript classes (inheritance for the React component API, class methods and class properties such as this.setState() and this.state). On the other side, there are lots of concepts from `functional programming` used in React (and its ecosystem) too. For instance, React's function components are another way of defining components in React. The question which led to function components in React: What if components could be used like functions?

```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```


