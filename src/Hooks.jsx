import React, { useState } from "react";

function Hooks() {
  // useState being used at the top level of the component
  const [count, setCount] = useState(0);

  if (count < 5) {
    // Extracting the code into a separate component when using in a condition
    return <CounterComponent count={count} setCount={setCount} />;
  }

  // Extracting the code into a separate component when using in a loop
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(<li key={i}>Item {i + 1}</li>);
    }
    return items;
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <ul>{renderItems()}</ul>
    </div>
  );
}

function CounterComponent({ count, setCount }) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Hooks;
