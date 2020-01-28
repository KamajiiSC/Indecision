"use strict";

console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
var template = React.createElement(
  "h1",
  null,
  "This is JSX from app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
