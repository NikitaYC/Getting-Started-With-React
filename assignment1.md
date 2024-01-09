What is React?
-React is javascript library for building user interfaces and it is widely used for creating dynamic and interactive web application.it was developed by Facebook

Who made React?
-React was developed by a software enginner at FACEBOOK named Jordan Walke. React first introduced in 2011 in an internal project then it was open source in May 2013

What is Babel?
-Babel is a javascript compliler that used to convert plain javascipt code into React to JSX(a synax extension for javascript used by react).

How does Babel convert html code in React into valid code?
-Babel primarily focuses on transpiling javascript code and its main role is not coverting HTML code into react code, React, on other hand, uses JSX to define its components 

What is ReactDOM used for? Write an example?
-ReactDOM is like a bridge between React elements and actual DOM elements.
ReactDOM is a specific package within the React system that provides methods for interacting with DOM(document object model).it is used to render React components into actual DOM,update them and handle events.
const element = React.createElement("h1",{
    className: "container",
    children: "Hello React!"
})

let root = ReactDOM.createElement(root)

root.render(element);

What are the packages that you need to import for react to work with?
-firstly need to add React and ReactDOM libraries to webpage.
Babel to convert JSX into browser friendly javascript

How do you add react to a web application?
-<script src="<https://unpkg.com/react@18.2.0/umd/react.production.min.js>"></script>
    <script src="<https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js>"></script>
we need to add this links to file. this is React and ReactDOM.

What is React.createElement?
-React.createElement is a function in React that is used to create react elements.
const element = React.createElement('type of element', property, 'context');

What are the three properties that createElement accept?
-1. type of element e.g h1,div,button etc
2. properties e.g className, id
3.context that is visible on webpage e.g "hello World!"
const element = React.createElement('type of element', property, 'context');

What is the meaning of render and root?
-Render in react refers to the process of converting react componets into actual DOM elements.

root refers to the HTML element in the DOM where react application mounthed.
