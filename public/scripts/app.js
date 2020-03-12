'use strict';

console.log('App.js is running!');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//JSX - Javascript XML
var app = {
  title: 'Inddecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var renderOptions = function renderOptions() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? "Here are your options" : "There are no options"
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: makeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeOptions },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'p',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  console.log(e.target.elements.option.value);

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ' ';
    renderOptions();
  }
};

var removeOptions = function removeOptions() {
  app.options = [];
  renderOptions();
};

var appRoot = document.getElementById("app");
renderOptions();
