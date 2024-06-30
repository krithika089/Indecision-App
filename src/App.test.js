import { render, screen } from '@testing-library/react';
import App from './playground/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/*

const firstName = x => x.split(' ')[0];
const lastName = x => x.split(' ')[1];

console.log(firstName("Krithika Muthukumar")); 
console.log(lastName("Krithika Muthukumar"));

const multiplier = {
  numbers: [1,6],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(
      (number) =>  number + " is multiplied by " + this.multiplyBy + " to get " + number*this.multiplyBy 
      );
  } 
  
}
console.log("multiplier is being called " +multiplier.multiply());
console.log(multiplier);

const count = 0;
function minusOne (){
  console.log("Minus one happened");
}
function reset (){
  console.log("Reset just happened");
}
const somebutton = (
  <div>
    <h1>Count:{count}</h1>
    <button
      onClick={reset}
    >
      Reset
    </button>
    <button id="minusOne" className='minusOne' 
    onClick={minusOne}
    >
      -1
    </button>
  </div>
);

const user = {
  name: 'krithika',
  age: 24,
  location: 'Chennai'
};
const templateTwo = (
  <div>
    <h1>{user.name}'ss' indecision app</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
    
  </div> 
);
*/


/*

const app ={
  title: 'This is an indecision app',
  subTitle: 'Yeah, Sub title exist',
  options: []
};
function ifSubTitle(subTitle){
  if(subTitle)
     return <p>{app.subTitle}</p>;
}

const onFormSubit = (e) =>{
  e.preventDefault();

  let option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  reRendering();
}
const stringArr = ['Item one','Item two'];
const removeAll = (e) =>{
  //const element = e.target.elements.remove.value;
  app.options = [];
 // e.target.elements.option.value = '';
  reRendering();
}
const root = (document.getElementById("root"));
const reRendering = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {(app.subTitle) && <p>{app.subTitle}</p>}
      <p>{(app.options.length>0) ? "Here are your options" : "No Options" }</p>
      <p>{app.options.length}</p>
      <button name='remove' onClick={removeAll}>Remove ALL</button>
      <ul>
        {
          app.options.map((stringAr) => 
             <p>stringAr = {stringAr} </p>
          
          )
        }
      </ul>
      <form onSubmit={onFormSubit}>
        <input type='text' name='option'/>
        <button>Submit</button>
      </form>
    </div> 
  );
  ReactDOM.render(template,root);
}

class Person{
  constructor(name = 'Anonymous',age = 0){
    this.name = name;
    this.age = age;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old.`;
  }
}
class Traveller extends Person{
  constructor(name,age,homelocation){
    super(name,age);
    this.homelocation = homelocation;
  }

  getDescription(){
    let desc = super.getDescription();
    if(this.homelocation){
      desc = `${desc} Iam visiting from ${this.homelocation}.`;
    }
    return desc;
  }

}


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne =this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
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

render();


const personObj = new Traveller('Sunny',18);
console.log(personObj.getDescription());
const personObj1 = new Traveller('Krithika',24,'Chennai');
console.log(personObj1.getDescription());
reRendering();


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

// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
// class Action extends React.Component{
//   render(){
//     return(
//       <div>
//       <button 
//       onClick={this.props.handlePick}
//       disabled= {!this.props.hasOptions}
//       >
//         What Should I do?
//       </button>
//       </div>
//     );
//   }
// }
// class Options extends React.Component{
//   render(){
//     const optionVal = this.props.options;
//    // console.log(optionVal+"dfd")
//     return(
//       <div>
//         {
//           this.props.options.map((option) => <p key = {option}> <Option key = {option} optionText={option} /> </p>)
//         }
//          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       </div>
     
//     );
//   }
// }

// class Option extends React.Component{
//   render(){
//    return(
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }*/