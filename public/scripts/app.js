'use strict';

console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
var APP = {
  title: 'Inddecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

var TEMPLATE = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    APP.title
  ),
  APP.subtitle && React.createElement(
    'p',
    null,
    APP.subtitle
  ),
  React.createElement(
    'p',
    null,
    APP.options.length > 0 ? "Here are your options" : "There are no options"
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var TEMPLATETWO = {};

var APPROOT = document.getElementById("app");

ReactDOM.render(TEMPLATETWO, APPROOT);
