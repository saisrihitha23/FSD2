import React, { useState, useEffect } from "react";

function App1() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🚀 Mission Control Clock</h2>
      <h3>Current Space Time: {time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default App1;