import React from "react";
import "./Course.css";

function Course(props) {
  return (
    <div className="course">
      <h3>🌍 Mission: {props.courseName}</h3>
    </div>
  );
}

export default Course;