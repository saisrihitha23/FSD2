import React, { Component } from "react";
import Course from "./Course";
import "./Student.css";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Space Explorer",
      course: "Mars Exploration",
      count: 0
    };
  }

  // EVENT → change mission
  changeCourse = () => {
    this.setState({
      course: "Jupiter Exploration"
    });
  };

  // EVENT → increase launch count
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
  return (
    <div className="student">
      <h2>👩‍🚀 Explorer: {this.state.name}</h2>

      <Course courseName={this.state.course} />

      <button onClick={this.changeCourse}>
        Change Mission
      </button>

      <button onClick={this.increase}>
        🚀 Launch Count: {this.state.count}
      </button>
    </div>
  );
}
}

export default Student;