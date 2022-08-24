<<<<<<< HEAD
import Dashboard from "./dashboard/Dashboard";
import { Router, Routes, Route } from "react-router-dom";
=======
import Dashboard from "dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Agent from "agents/Agent";
>>>>>>> 10b3b11 (use map in List)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD
=======
      <Route path="agent/:name" element={<Agent />} />
>>>>>>> 10b3b11 (use map in List)
    </Routes>
  );
}

export default App;
