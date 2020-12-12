# Terminology

---

## ECMAScript

JavaScript is an implementation of the ECMAScript standards, which are established by Ecma International. These standards are meant to ensure the interoperability of Web pages across different Web browsers.

---

## JavaScript (JS) Engine

A JavaScript engine is a computer program that executes JavaScript code. It creates an optimized code, that machines are able to understand _(lower level language e.g. machine code)_. The most famous one is the V8 Engine developed by Google which is used in Chrome and Node.js. Actually there are many more Javascript engines. As long as they follow the standard set by the ECMAScript standards, anyone can write a JS engine.

---

## Interpreter vs Compiler

The JS Engine can run code either with an Interpreter or a Compiler.

Interpreters are quicker to get up and running the code but it doesn't optimize it. The code generated from a compiler will run eventually faster but will take longer to start executing.

---

## Compilers

- **Babel** is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).
- **Typescript** is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!

---

## JIT Compiler

A Just-In-Time Compiler attempts to use the benefits of both Interpreter and Compiler. While the Interpreter executes the code at run time, the Compiler will create an optimized code and replace the bytecode. Therefore interpreting bytecode every time a method is invoked isn't nessecary.

---

### Inside the V8-Engine (Google)

- **Parser:** Breaks the code into tokens based on keywords. (lexical analysis)
- **AST:** These tokens are formed into an abstract syntax tree.
- **Interpreter:** Walks through the AST and generates byte code. It reads the code line by line on the fly.
- **Profiler:** The Profiler monitors and watches code to optimize it.
- **Compiler:**
  The compiler works ahead of time and creates a translation of the code that has been written and compiles down to a lower level language that machines can read.

---

## The "this" Keyword

"**this** is the object that the function is a property of."

- gives methods acess to their objects
- executes same code for multible objects (this functions as a placeholder)

---

## Dynamic Scope

The **this** Keyword is dynamically scoped. It doesn't matter where it is written (lexical scope) but how the function is invoked. _(who called the function?)_

```javascript
const object = {
  sing () {
    console.log ('a: ', this);
    var anotherFunc = function() {
      console.log ('b: ', this);
    }
    anotherFunc()
  }
}

obj.sing() -->

a: object
b: window (global object)
```

How can we solve the above issue?

Arrow functions _(ES6)_ are lexically bound!

```javascript
const object = {
  sing () {
    console.log ('a: ', this);
    var anotherFunc = ()  => {
      console.log ('b: ', this);
    }
    anotherFunc()
  }
}

obj.sing() -->

a: object
b: object
```

--> The **this** Keyword obtains lexical begaviour.

---

## Context Vs Scope

**Scope** defines the access to variables of a function when the function is invoked. _(Scope is function based)_

**Context** is always the value of the reserved word **this** which is a reference to the object that owns the execution of the code. _(Context is object based)_
