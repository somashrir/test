import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Leaderboard } from "./Components/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
