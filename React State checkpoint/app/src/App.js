import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //so here we implement the state of the class
  state = {
    person: {
      fullName: "lamino",
      bio: "My name is lamino and i'am a software developer",
      imgSrc:
        "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Software Developer",
    },
    shows: false,
    elapsedTime: 0,
  };
  //we use the lifecycle methods so we can mesure the elapsed time (i ve set it to 0 in the state)
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  //our method to show the state of the component
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };
  //then we render our implmentation
  render() {
    return (
      <div className="App">
        <button
          style={{
            fontSize: "15px",
            background: "#6EDFF6",
            borderRadius: "5px",
            border: "0px solid",
            height: "30px",
            width: "100px",
          }}
          onClick={this.toggleShow}
        >
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.shows && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "300px",
                height: "400px",
                border: "3px solid #111",
                margin: "0",
                padding: "0",
                borderRadius: "10px",
              }}
            >
              <img
                style={{}}
                src={this.state.person.imgSrc}
                alt={this.state.person.fullName}
                width={200}
              />
              <h2>Name: {this.state.person.fullName}</h2>
              <p>Bio: {this.state.person.bio}</p>
              <p>Profession: {this.state.person.profession}</p>
            </div>
          </div>
        )}
        <p>Time since component mounted: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
