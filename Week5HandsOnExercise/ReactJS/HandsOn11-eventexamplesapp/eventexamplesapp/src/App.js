import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Multiple methods
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // INR to Euro conversion (approx.)
    const euro = (parseFloat(amount) / 90).toFixed(2);

    alert(`Converting to Euro...\n€ ${euro}`);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br /><br />

      <button onClick={onPress}>Click on me</button>

      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br /><br />

        <label>Currency: </label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;