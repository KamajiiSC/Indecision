//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing thee']
    }
  }
  handlePick() {
    
  }

  handleDeleteOptions() {
    this.setState(() => {
      return{
        options: []
      };
    });
  }
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
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
        <button 
        onClick={this.handleSelect}
        disabled={!this.props.hasOptions}
        >What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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