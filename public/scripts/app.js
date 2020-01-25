console.log('App.js is running!');

//JSX - Javascript XML
//let template = <p>This is JSX from app.js!</p>;
var template = React.createElement("p", null, "This is JSX from app.js!");
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);