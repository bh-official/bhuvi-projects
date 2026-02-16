import UserPage from "./component/UserPage";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import PlantsPage from "./pages/PlantsPage";
import IndividualPlantPage from "./pages/IndividualPlantPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/plants"> Plants </Link>
          </nav>
        </header>
        <Routes>
          {/* <Route path="/users/:username" element={<UserPage />} /> */}
          <Route path="/" element={<h1> Welcome to the plant app </h1>} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/plants/:id" element={<IndividualPlantPage />} />
          <Route
            path="/plants/:id/photos"
            element={<h2> Photos of the plant </h2>}
          />
          <Route path="/plants/:id/edit" element={<h2> Edit the plant </h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
