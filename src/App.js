import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> HP APP</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
