import React from "react";
// import { robots } from "./robots"; // for robots.js
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"; 
import "./App.css";
import Scroll from "../components/Scroll";

// if we change import React, {Component } from "react" to the import field. 
// Then we can do only Class App extends Component
class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      // robots: robots, // for robots.js
      robots: [],
      searchfield: ""
    }
    console.log("constructor"); // check React.Component lifecycle order
  }


  componentDidMount() { // React.Component LifeCycle. As it is part of react, it does not need binding.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots: users}));

    console.log("componentDidMount"); // check React.Component lifecycle order
  }


  // =(event) => This binding is necessary to make `this` work in the callback. 
  // We can add this.onInputSearchChange = this.onInputSearchChange.bind(this); 
  // after the this.state{} block above
  // We can use any method we like.
  onInputSearchChange = (event) => { 
    this.setState({ searchfield: event.target.value});
    // change the state or value of serachfield every time the input changes
  }

  render() {
    const {robots, searchfield} = this.state;
    // const filterRobots = this.state.robots.filter(robot => {
    const filterRobots = robots.filter(robot => {
      // return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log("render"); // check React.Component lifecycle order

    // if(this.state.robots.length === 0) {
    return (!robots.length) ? 
      <h1 className="tc pt5">Loading...</h1>
      : (
          <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox inputSearchChange= {this.onInputSearchChange} />
              {/* <div style={{overflowY:"scroll", borderTop:"4px solid black", height: "500px"}}>
                <CardList robots={filterRobots}/>  /* Here, CardList gets state i.e robots as props */}
              {/* </div> */}

              <Scroll>
                <CardList robots={filterRobots}/>  {/* Here, CardList gets state i.e robots as props */}
              </Scroll>
          </div>
        )
  }
}

export default App;