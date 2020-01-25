console.log('App.js is running!');

//JSX - Javascript XML
let template = <p>This i JSX from app.js!</p>;
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);