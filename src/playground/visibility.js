class Visibility extends React.Component{
  render(){
    const title = "Visibility Toggle";

    return(
      <div>
        <Header title = {title}/>
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
ReactDOM.render(<Visibility />, document.getElementById('app'));