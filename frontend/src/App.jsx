import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import Workspace from "./pages/WorkSpace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/workspace/:id" element={<Workspace/>} />
      </Routes>
    </Router>
  )
}

export default App
