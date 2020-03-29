class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['Thing one', 'Thing two', 'Thing three']
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options.length}/>
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
  render() {
    return(
      <div>
        <button>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.options}</p>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        <p>Option Component</p>
      </div>
    );
  }
}

class AddOption extends React.Component{
  render(){
    return(
      <div>
        <p>AddOption component</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));