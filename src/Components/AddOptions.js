import React from 'react'

export default class AddOptions extends React.Component{
    constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e){
      e.preventDefault();
      console.log('testing');
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