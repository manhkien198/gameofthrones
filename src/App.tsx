import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/Layout/Layout";
import Login from "./components/login";
import Books from "./components/pages/Books";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;
