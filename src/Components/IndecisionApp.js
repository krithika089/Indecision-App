import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import Option from './Option';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Counter from './Counter';
import AddOptions from './AddOptions';

export default class IndecisionApp extends React.Component{
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
  
  Counter.defaultProps = {
    count:0
  }
  
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  root.render(<IndecisionApp />);