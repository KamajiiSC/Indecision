let visibility = false;

class ToggleVisibility extends React.Component{
  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
      </div>
    );
  }
}
/*const toggleVisibility = () => {
  visibility = !visibility;
  render();
};*/

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
};
ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));

