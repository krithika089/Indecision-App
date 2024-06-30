let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

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


  ReactDOM.render(jsx, document.getElementById('app'));
};



//react version

class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.VisibilityToggle = this.VisibilityToggle.bind(this);
    this.state = {
      visibility : false
    }
  }
  VisibilityToggle(){
    this.setState ((prevState) =>  {
      return {
       visibility:  !prevState.visibility
       
      }
    });
   console.log('inside func');
   console.log(this.visibility);
  }
  render(){
    return(
      <div>
        <h1> Visibility toggle</h1>
        <button onClick = {this.VisibilityToggle}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
      </div>
    );
  }

}
