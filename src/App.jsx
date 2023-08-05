import React from "react";
import Layout from "./Layout";
import Hooks from "./Hooks";
import Home from "./Home";
import Game from "./TicTac";
import FirstTest from "./FirstTest";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MockDataTest from "./MockDataTest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/tic-tac" element={<Game />} />
          <Route path="/first-test" element={<FirstTest />} />
          <Route path="/data-test" element={<MockDataTest />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
