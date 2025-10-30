import "./index.css";
import React from "react";
import TaskItem from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import MainMenu from "./components/MainMenu";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="selection:bg-pink-500 h-screen w-screen">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/read" element={<TaskItem />} />
      </Routes>
    </div>
  );
};

export default App;
