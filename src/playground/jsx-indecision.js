console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
const app ={
  title: 'Inddecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options.length > 0 )? "Here are your options" : "There are no options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeOptions}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <p key={option}>{option}</p>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(e.target.elements.option.value);

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ' ';
    renderOptions();
  }
};

const removeOptions = () => {
  app.options = [];
  renderOptions();
};

const makeDecision = () => {
  const randNumb = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNumb];
  alert(option);
};

const appRoot = document.getElementById("app");
renderOptions();
