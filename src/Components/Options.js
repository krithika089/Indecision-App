import React from "react";
import Option from "./Option";

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
  
  export default Options;