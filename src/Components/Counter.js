import React from "react";

export default class Counter extends React.Component{
    constructor(props){
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne =this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: props.count
      }
    }
  
    
    handleAddOne(){
      this.setState( (prevState) => {
        return{
          count: prevState.count +1 
        };
      }
  
      );
    }
    handleMinusOne(){
      this.setState( (prevState) => {
        return{
          count: prevState.count -1
        };
      }
  
      );
    }
    handleReset(){
      this.setState( (prevState) => {
        return{
          count:0
        };
      }
  
      );
    }
    componentDidMount(){
      const count = parseInt(localStorage.getItem('count'));
      if(!NaN)
      this.setState(() => ({count}));
    }
    componentDidUpdate(prevProps,prevState){
        
        if(prevState.count !== this.state.count){
          console.log("update "+this.state.count);
            localStorage.setItem('count',this.state.count);
        }
    }
    render(){
      return(
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}> +1 </button>
          <button onClick={this.handleMinusOne}> -1 </button>
          <button onClick={this.handleReset}> Reset </button>
  
        </div>
      );
    };
  
  }
  
  