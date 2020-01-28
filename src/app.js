console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
let template = (
  <div>
    <h1>This is JSX from app.js!</h1>
    <p>This is some info</p>
  </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);