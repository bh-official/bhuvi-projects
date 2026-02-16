import { Routes, Route, Link } from "react-router";
import BayPage from "./pages/BayPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <p>Welcome to react router. This is made outside of routes</p>
      <nav>
        <a href="/sash"> Learn about sash windows</a>
        <Link to="/bay"> Learn about bay windows</Link>
        <Link to="/jalousie"> Learn about jalousie windows</Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<p>Welcome to the homepage</p>} />
        <Route path="/sash" element={<p>Learn about sash windows</p>} />
        <Route path="/bay" element={<BayPage />} />
        <Route path="/jalousie" element={<p>Learn about jalousie windows</p>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
