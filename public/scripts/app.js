'use strict';

console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'This is JSX from app.js!'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
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

var userName = 'Brandon';
var userAge = 21;
var userLocation = 'Baltimore';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Brandon Schaen'
  ),
  React.createElement(
    'p',
    null,
    'Age: 21'
  ),
  React.createElement(
    'p',
    null,
    'Location: Baltimore'
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
