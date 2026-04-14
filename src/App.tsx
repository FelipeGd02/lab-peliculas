import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import { Catalogue } from "./pages/Catalogue";
import { Saved } from "./pages/Saved";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
