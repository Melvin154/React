//React Forms
class Reactform extends React.Component {
    constructor() {
      super();
      this.state = { username: " ", age: null, errmsg: "" };
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
  
      this.setState({ errmsg: err });
      this.setState({ [n]: v });
    };
    formsubmit=(event)=>{
      event.preventDefault();
      alert("Your Name is " + this.state.username + "And Your Age is " + this.state.age)
    }
    render() {
      return (
        <form onSubmit={this.formsubmit}>
          <h1>Hello {this.state.username}</h1>
          <h2>Your Age {this.state.age}</h2>
          Enter Your Name :
          <input type="text" name="username" onChange={this.uservalue}></input>
          Enter Your Age :
          <input type="text" name="age" onChange={this.uservalue}>
            {this.state.errmsg}
          </input>
          <input type="submit"></input>
        </form>
      );
    }
  }
  ReactDOM.render(<Reactform/>, document.getElementById("root"));
  