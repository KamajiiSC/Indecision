console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
const app ={
  title: 'Inddecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

const onFormSubmit = (e) => {
  e.preventDefault();
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0 )? "Here are your options" : "There are no options"}</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type='text' name='option'/>
      <button>Add Option</button>
    </form>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
