import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/HomePage.tsx";
import Header from "./components/Header.tsx";
import Login from "./pages/LoginPage.tsx";
import Play from "./pages/PlayPage.tsx";
import UserMenu from "./pages/UserMenuPage.tsx";
import AdminMenu from "./pages/AdminMenuPage.tsx";

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
