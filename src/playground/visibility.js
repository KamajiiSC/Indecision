let visibility = false;

class ToggleVisibility extends React.Component{
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggle(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    })
  }

  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && <p>Some details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));

