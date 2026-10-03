import React, { Component } from "react";
import "./Student.css";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Space Explorer",
      course: "Mars Exploration",
      count: 0,

      // Conditional rendering
      isLoggedIn: false,

      // List rendering
      missions: [
        "Mars Exploration",
        "Jupiter Exploration",
        "Moon Mission",
        "Saturn Exploration"
      ],

      // Form data
      form: {
        name: "",
        gender: "",
        subscribe: false
      }
    };
  }

  // EVENT: Change mission
  changeCourse = () => {
    this.setState({
      course: "Jupiter Exploration"
    });
  };

  // EVENT: Increase launch count
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // CONDITIONAL RENDERING
  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  // FORM CHANGE
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: type === "checkbox" ? checked : value
      }
    });
  };

  // FORM SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(this.state.form, null, 2));
  };

  render() {
    return (
      <div className="student">

        <h2>👩‍🚀 Explorer: {this.state.name}</h2>

        <p>
          Current Mission: <strong>{this.state.course}</strong>
        </p>

        {/* PROPS + EVENT */}
        <button onClick={this.changeCourse}>
          🪐 Change Mission
        </button>

        <button onClick={this.increase}>
          🚀 Launch Count: {this.state.count}
        </button>

        {/* CONDITIONAL RENDERING */}
        <div className="section">
          <h3>🔐 Conditional Rendering</h3>

          {this.state.isLoggedIn ? (
            <p>🌟 Welcome, Space Explorer!</p>
          ) : (
            <p>🚀 Please Login to Continue</p>
          )}

          <button onClick={this.toggleLogin}>
            {this.state.isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* LIST RENDERING */}
        <div className="section">
          <h3>🌌 Space Mission List</h3>

          <ul>
            {this.state.missions.map((mission, index) => (
              <li key={index}>
                🚀 {mission}
              </li>
            ))}
          </ul>
        </div>

        {/* REACT FORM */}
        <div className="section">
          <h3>👨‍🚀 Astronaut Registration</h3>

          <form onSubmit={this.handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter astronaut name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />

            <p>Gender:</p>

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={this.handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={this.handleChange}
              />
              Female
            </label>

            <label>
              <input
                type="checkbox"
                name="subscribe"
                checked={this.state.form.subscribe}
                onChange={this.handleChange}
              />
              Subscribe to Space Mission Updates
            </label>

            <br />

            <button type="submit">
              Submit Registration
            </button>

          </form>
        </div>

      </div>
    );
  }
}

export default Student;