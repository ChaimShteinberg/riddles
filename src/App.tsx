import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
