class Visibility extends React.Component{
  render(){
    const title = "Visibility Toggle";

    return(
      <div>
        <Header title = {title}/>
        <ToggleVisibility />
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <h1>{this.props.title}</h1>
    );
  }
}

class ToggleVisibility extends React.Component{
  handleVisibility(){
    alert('hello');
  }
  render(){
    let isVisible = false;
    return(
      <div>
        <button onClick={this.handleVisibility}>Show Details</button>
        {isVisible && <p>Some details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));