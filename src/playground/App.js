import logo from './logo.svg';
import './App.css';
import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
window.React = React
window.React =  ReactDOM

class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
       options : props.options
    };
  }
  //Lifecycle functions start
  componentDidMount(){
    try{
      console.log('componentDidMount');
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options)
      this.setState(() => ({options}));
    }
    catch(e){

    }
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
     }
  }
  componentWillUnmount(){

  }
  handleDeleteOptions(){
    this.setState(() => ({ options: [] }) );
  }
  handleDeleteOption(optionToRemove){
    this.setState( (prevState) => {
      return{
        options: prevState.options.filter((option) => {
          return option !== optionToRemove;
        })
      };
    });
    
  }
//React lifecycle functions
/*
componentDidMount()
componentDidUpdate()
componentWillUnMount()

*/
  
  handleAddOption(input){
    if(!input){
      return 'This is an empty string. Provide a valid one to proceed';
    }else if(this.state.options.indexOf(input) > -1){
      return 'This option already exists';
    }

    console.log(input);
      this.setState((prevState) => ({
        options: prevState.options.concat([input])
       }));
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render(){
    const title = 'In Decision App';
    const subtitle ='Put your life in hands of computer.';
   
    return(
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action hasOptions={this.state.options.length > 0}
      handlePick = {this.handlePick}
      />
      <Options 
      options={this.state.options}
      handleDeleteOptions = {this.handleDeleteOptions}
      handleDeleteOption = {this.handleDeleteOption}
      />
      <AddOptions options={this.state.options}
      handleAddOption = {this.handleAddOption} />
      </div>
    );
  }
 
}
IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) =>{
  return(
    <div>
    <button 
    onClick={props.handlePick}
    disabled= {!props.hasOptions}
    >
      What Should I do?
    </button>
    </div>
  );
};
const Options = (props)=>{
  return(
    <div>
      {
        
        props.options.map((option) => 
        <p key = {option}>
           <Option key = {option} 
           optionText={option} 
           handleDeleteOption = {props.handleDeleteOption}
           />
        </p>)
      }
       <button onClick={props.handleDeleteOptions}>Remove All</button>
       {props.options.length === 0 && <p>Enter an option to get Started!</p>}
    </div>
   
  );
};


const Option = (props) =>{
  return(
    <div>
      {props.optionText}
      <button onClick= {(e) => {
        props.handleDeleteOption(props.optionText);
      }} >
        Remove
      </button>
    </div>
  );
};

// IndecisionApp.defaultProps = { 
// options: []
// };


class AddOptions extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    let input =  e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(input);
    
      this.setState(() => ({ error:error  }));
      if(!error){
        e.target.elements.option.value = '';
      }
    
  }
  
  render(){
    return(
      <div>
        <p>{this.state.error}</p>
        
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

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


Counter.defaultProps = {
  count:0
}

 
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<IndecisionApp />);