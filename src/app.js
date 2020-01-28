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

let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);



let appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);