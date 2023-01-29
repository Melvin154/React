import React from "react";
import ReactDOM from "react-dom";

//import App from './App.js';
//Components
/*
//Class Components
class Mywebsite extends React.Component{
  render(){
    return <h1>Run The Program</h1>
  }
}

class Website extends React.Component{
  render(){
    return <div><Mywebsite/><App/>
    </div>
  }
}
ReactDOM.render(<Website/>,document.getElementById('root'))
*/


//Props
class Learnreactpropsparent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>
          Now Learning {this.props.var} in {this.props.let}
        </p>
        <p>
          Myself {this.props.details.name} and I am from{" "}
          {this.props.details.city} and currently working on{" "}
          {this.props.details.company} company...
        </p>
      </div>
    );
  }
}

class Learnreactpropschild extends React.Component {
  render() {
    const topic = "React Js";
    const Language = "Tamil";
    const s = {
      name: "Melvin Thomas",
      city: "Chennai",
      company: "Infosys",
    };
    return (
      (<Learnreactpropsparent var={topic} let={Language} details={s} />)
      
    );
  }
}
ReactDOM.render(<Learnreactpropschild />,document.getElementById('root'))


//Default props
class Learnreactpropsgrandchild extends React.Component {
  render() {
    return <h1>Learn React Js {this.props.concept} in {this.props.language1}</h1>;
  }
}
Learnreactpropsgrandchild.defaultProps={concept:"props",language1:"Korean"}
//ReactDOM.render(<Learnreactpropsgrandchild concept="component vs state" language1="Telugu"/>,<Learnreactpropschild/>document.getElementById("root"));
