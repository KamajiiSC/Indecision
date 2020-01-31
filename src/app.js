console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
const APP ={
  title: 'Inddecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

const TEMPLATE = (
  <div>
    <h1>{APP.title}</h1>
    {APP.subtitle && <p>{APP.subtitle}</p>}
    <p>{(APP.options.length > 0 )? "Here are your options" : "There are no options"}</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
  </div>
);

const USER ={
  name: 'Brandon',
  age: 21,
  location: 'Batimore'
};
function getLocation(location){
  if(location) {
    return <p>Location: {location}</p>;
  }
}

const TEMPLATETWO = (
  <div>
    <h1>{USER.name ? USER.name : 'Anonymous'}</h1>
    {(USER.age && USER.age >= 18) && <p>Age: {USER.age}</p>}
    {getLocation(USER.location)}
  </div>
);



const APPROOT = document.getElementById("app");

ReactDOM.render(TEMPLATE, APPROOT);