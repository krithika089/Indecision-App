import logo from './logo.svg';
import './App.css';
import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
window.React = React
window.React =  ReactDOM

class Counter extends React.Component{
    constructor(props){
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne =this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: props.count
      }
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState){
        console.log("update "+this.state.count);
        if(prevState.count === 0){
            localStorage.setItem('count',this.state.count);
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
  
  Counter.defaultProps = {
    count:0
  }
  
  
  
  
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  root.render(<Counter />);








  