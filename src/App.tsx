import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Login from "./pages/Login.tsx";
import Play from "./pages/Play.tsx";
import UserMenu from "./pages/UserMenu.tsx";
import AdminMenu from "./pages/AdminMenu.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginForm/:form" element={<Login />} />
          <Route path="/play" element={<Play />} />
          <Route path="/userMenu" element={<UserMenu />} />
          <Route path="/adminMenu" element={<AdminMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
