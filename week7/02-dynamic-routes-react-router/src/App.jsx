import UserPage from "./component/UserPage";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
