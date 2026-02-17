import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Animals from "./pages/Amimals";
import Plain from "./pages/Plain";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/plain">Plain</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/plain" element={<Plain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
