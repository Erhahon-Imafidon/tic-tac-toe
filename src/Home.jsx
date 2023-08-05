import React from "react";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counters that update the same sharing the same state</h1>
      <MyButton
        count={count}
        onClick={handleClick}
        style={{ marginRight: "10px" }}
      />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};

const MyButton = ({ count, onClick, style }) => {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <button onClick={onClick} style={style}>
      Count {count}
    </button>
  );
};

export default Home;
