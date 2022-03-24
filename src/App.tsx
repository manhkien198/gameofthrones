import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/Layout/Layout";
import Login from "./components/login";
import Books from "./components/pages/Books";
import { useGlobalContext } from "./Context/Context";
function App() {
  const navi = useNavigate();
  const { logged, setLogged } = useGlobalContext();

  useEffect(() => {
    if (logged) {
      navi("/home");
    } else {
      navi("/");
    }
  }, []);
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
