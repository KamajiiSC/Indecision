console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
let template = <h1>This is JSX from app.js!</h1>;
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);