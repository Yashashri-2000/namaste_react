import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info:{
      login: "Dummy",
      id: "1",
      }
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/Yashashri-2000");
    const JSON =await data.json();
    console.log(JSON)
    this.setState({info:JSON});
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render");
    const {id, login}= this.state.info
    return (
    
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <h1>Count1:{this.state.count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 2,
            });
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              // count:this.state.count+1,
              count1: this.state.count1 + 2,
            });
          }}
        >
          Count Increase1
        </button>
        <h2>Name: {login}</h2>
        <h3>Location: {id}</h3>
        <h4>Contact:@yashashri</h4>
      </div>
    );
  }
}

export default UserClass;
