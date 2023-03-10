import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import styles from "./demo.module.css";

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
/*
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
*/

//State
/*
class Reactstate extends React.Component {
  constructor() {
    super();
    this.state = { initialvalue: "Welcome", name: "Black Squad" };
  }
  changevalue = () => {
    this.setState({ initialvalue: "Thanks for Watching" });
  }
  render() {
    return  <div>
        <h1>
          {this.state.initialvalue} {this.state.name}
        </h1>
        <br></br>
        <button type="button" onClick={this.changevalue}>
          Exit
        </button>
      </div>
    
  }
}

ReactDOM.render(<Reactstate />, document.getElementById("root"));
*/

//React Lifecycle
//4 phases: Initial,Mounting,Updating,Unmounting
//Initial phase: getDefaultProps(),getInitialState()

/*
class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = { value: "Welcome", name: "Black Squad" };
  }
  componentWillMount() {//Mouunting Phase
    alert("Learn React Js Lifecycle");
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.value} {this.state.name}
        </h1>
        <br></br>
        <button type="button" onClick={this.changevalue}>change Value</button>
        <button type="button" onClick={this.deleteheader}>Delete Header</button>
      </div>
    );
  }
  changevalue=()=>{
this.setState({value:"Learn React Js in Tamil"})
  }
  deleteheader=()=>{this.setState({value:false,name:false})}

  componentDidMount() {//Mounting Phase
    setTimeout(() => {
      this.setState({ value: "Thank you" });
    }, 5000);
  }
  componentWillUpdate(){//Updating Phase
    alert("Do you want to update a new value ? ")
  }
  componentDidUpdate(){//Updating Phase
    document.getElementById('mydiv').innerHTML="New value Updated Sucessfully " + this.state.value;
  }
  shouldComponentUpdate(){//Updating phase
    return true;
  }
  componentWillUnmount(){//Unmounting phase
    alert('Header Deleted')
  }
}

ReactDOM.render(<Lifecycle />, document.getElementById("root"));
*/

//EventHandling in React JS
/*
class Eventbind extends React.Component {
  constructor(){
    super();
    this.state = {
      msg: "Welcome",
    };
  }
  clickEvent = (a) => {
    this.setState({
      msg: "Thank You",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onMouseLeave={this.clickEvent.bind(this,"Welcome World")}>Click</button>
      </div>
    );
  }
}
ReactDOM.render(<Eventbind />, document.getElementById("root"));
*/

//React CSS
/*
class Reactstyle extends React.Component {
  render() {
    const mystyle={
      color:"Orange",
      fontFamily:"Arial"
    }
    return (
      <div>
        <h1 style={{color:"red",fontSize:"55px",textDecoration:"underline"}}>REACT WITH CSS</h1>
        <h2 style={mystyle}>Now you are learning How to use css in React Js</h2>
        <h3 className="Externalcss">Okay !! . Let's Begin</h3>
        <h4 className={styles.demo}>Get Started !!</h4>
      </div>
    );
  }
}
ReactDOM.render(<Reactstyle />, document.getElementById("root"));
*/

//React Forms
/*
class Reactform extends React.Component {
  constructor() {
    super();
    this.state = { username: "", age: null, errmsg: "" };
  }
  uservalue = (event) => {
    let n = event.target.name;
    let v = event.target.value;
    let err = " ";
      if (n === "age") {
        if (v !== "" && !Number(v)) {
          err = <strong>Invalid Value , Your age must be A Number!!</strong>;
        }
      }
  
    this.setState({ errmsg: err});
    this.setState({ [n]: v });
  };
  formsubmit=(event)=>{
    event.preventDefault();
    alert("Your Name is " + this.state.username + " And Your Age is " + this.state.age)
  }
  render() {
    return (
      <form onSubmit={this.formsubmit}>
        <h1>Hello {this.state.username}</h1>
        <h2>Your Age {this.state.age}</h2>
        Enter Your Name :
        <input type="text" name="username" onChange={this.uservalue}></input><br></br>
        Enter Your Age :
        <input type="text" name="age" onChange={this.uservalue}/>{this.state.errmsg}
        <input type="submit"/>
      </form>
    );
  }
}
ReactDOM.render(<Reactform />, document.getElementById("root"));
*/

//React Fragments
/*
class Tablecreation extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Rowcreation />
        </tr>
      </table>
    );
  }
}
class Rowcreation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Now You are Learning React Fragments</h1>
        <table>
          <td>HII</td>
          <td>BYE</td>
        </table>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<Tablecreation />, document.getElementById("root"));
*/

//React Lists
/*
function Menubar() {
  const newlist = [1, 2, 3, 4, 5, "React", "Node"];
  const r1 = newlist.map((listvalues) => {
    return <li>{listvalues + " " + newlist[5]}</li>;
  });
  return <ul>{r1}</ul>;
}
ReactDOM.render(<Menubar newlist />, document.getElementById("root"));
*/