# React Function Components

- [React Function Components](#react-function-components)
  - [0 Resources](#0-resources)
  - [1. REACT FUNCTION COMPONENT EXAMPLE](#1-react-function-component-example)
  - [2. PROPS](#2-props)

## 0 Resources

[react function component](https://www.robinwieruch.de/react-function-component)


## 1. REACT FUNCTION COMPONENT EXAMPLE

Let's start with a simple example of a Functional Component in React defined as App which returns JSX:

```javascript
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
```

That's already the essential React Function Component Syntax. The definition of the component happens with just a JavaScript Function which has to return JSX -- React's syntax for defining a mix of HTML and JavaScript whereas the JavaScript is used with curly braces within the HTML. In our case, we render a variable called greeting, which is defined in the component's function body, and is returned as HTML headline in JSX.

`Note`: If you are familiar with React Class Components, you may have noticed that a Functional Component is a React Component without render function. Everything defined in the function's body is the render function which returns JSX in the end.

Now, if you want to render a React Component inside a Function Component, you define another component and render it as HTML element with JSX within the other component's body:


```javascript
import React from 'react';

function App() {
  return <Headline />;
}

function Headline() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
```

Basically you have a function as Child Component now. Defining React Components and rendering them within each other makes Composition in React possible. You can decide where to render a component and how to render it.


## 2. PROPS

Let's learn about a React Function Component with props. In React, `props are used to pass information from component to component`. Essentially props in React are always passed down the component tree:

```javascript
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
}

function Headline(props) {
  return <h1>{props.value}</h1>;
}

export default App;
```

Props are the React Function Component's parameters. Whereas the component can stay generic, we decide from the outside what it should render (or how it should behave). When rendering a component (e.g. Headline in App component), you can pass props as HTML attributes to the component. Then in the Function Component the props object is available as argument in the function signature.

```javascript

```

```javascript

```
```javascript

```
