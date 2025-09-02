import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
