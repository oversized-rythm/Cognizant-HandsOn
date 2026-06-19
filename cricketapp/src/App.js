import React from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true; // Change this flag to false to see IndianPlayers

  return (
    <div>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;