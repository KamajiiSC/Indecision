class Visibility extends React.Component{
  render(){
    const title = "Visibility Toggle";
    let isVisible = false;

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
  render(){
    return(
      <button>Show Details</button>
      
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));