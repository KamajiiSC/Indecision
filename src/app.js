console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
let app ={
  title: 'Inddecision App',
  subtitle: 'Put your life in the hands of a computer'
};

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
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

ReactDOM.render(template, appRoot);