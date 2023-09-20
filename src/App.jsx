import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
