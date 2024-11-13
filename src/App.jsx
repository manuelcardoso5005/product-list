import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}
