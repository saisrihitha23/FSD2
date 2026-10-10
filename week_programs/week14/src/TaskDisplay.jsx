
function TaskDisplay(props) {
  return (
    <div className="task">
      <h2>🛰️ Mission Tasks Completed: {props.count}</h2>

      {props.count === 0 ? (
        <p>No mission tasks completed yet. Begin your exploration!</p>
      ) : (
        <p>Great work, astronaut! Keep exploring the universe.</p>
      )}
    </div>
  );
}

export default TaskDisplay;
