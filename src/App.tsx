import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Play from "./pages/Play.tsx";
import UserMenu from "./pages/UserMenu.tsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/play" element={<Play />} />
          <Route path="/userMenu" element={<UserMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
