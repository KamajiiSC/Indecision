//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['Thing one', 'Thing two', 'Thing three']
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  handleSelect() {
    alert("handle select");
  }
  render() {
    return(
      <div>
        <button onClick={this.handleSelect}>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component{
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove (){
    alert(this.props.options);
  }
  render(){
    return(
      <div>
        <button onClick={this.handleRemove}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class AddOption extends React.Component{
  handleOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim;
    if(option){
      alert('Input');
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleOption}>
          <input type="text" name="option"></input>
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));