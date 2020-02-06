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





const APPROOT = document.getElementById("app");

ReactDOM.render(TEMPLATE, APPROOT);