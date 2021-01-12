### Strings

Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ". Strings are also immutable, which means that individual characters cannot be altered.

#### The length Property

The .length property of a string returns the number of characters that make up the string.

```javascript
let message = 'good nite';
console.log(message.length);
// Prints: 9

console.log('howdy'.length);
// Prints: 5
```

#### String Concatenation

In JavaScript, multiple strings can be concatenated together using the + operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.

```javascript
let service = 'credit card';
let month = 'May 30th';
let displayText = 'Your ' + service + ' bill is due on ' + month + '.';

console.log(displayText);
// Prints: Your credit card bill is due on May 30th.
```

#### Escape Sequences

What if you wanted to put a contraction inside of a string? For example, take a look at the folowing code block.

```javascript
const myString = 'Why doesn't this work';
// => SyntaxError: Unexpected identifier
```

Take a look at this example:

```javascript
const myString = "Why doesn't this work";
console.log(myString); // => 'Why doesn't this work?'
```

Notice how when we put the (\) in front of the (') it didn't end our string? This is called escaping the character. Anytime JavaScript sees a (\) inside of a string, it knows that the following character has a special meaning. Here is a list of some of the most common escape sequences:

- \' => single quote
- \" => double quote
- \\ => backslash
- \n => newline
- \r => carriage return
- \t => tab
- \b => backspace
- \f => form feed

Notice that even a backslash itself has to be escaped in order to display inside a string as well. Now let's see what you can do!

#### String Interpolation / Template Literals

String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).

It can be performed using template literals: text ${expression} text. Inside a template literal, you're able to refer to variables or execute code by using ${}.

String interpolation also removes the need for escaped characters and string concatenation in many case as well. If you hit return, tab, etc inside of a template it will format the string in that form for you!

```javascript
let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;
```
