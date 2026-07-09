import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ margin: "40px" }}>
      {isLoggedIn ? (
        <>
          <h1>Welcome back</h1>
          <h3>User Page</h3>
          <p>You can now book flight tickets.</p>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Please sign up.</h1>
          <h3>Guest Page</h3>
          <p>Browse available flight details.</p>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;