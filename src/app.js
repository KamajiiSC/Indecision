console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
let template = (
  <div>
    <h1>This is JSX from app.js!</h1>
    <p>This is some info</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
  </div>
);

let user ={
  name: 'Brandon',
  age: 21,
  location: 'Baltimore'
};

let userName = 'Brandon';
let userAge = 21;
let userLocation = 'Baltimore'
let templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);



let appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);