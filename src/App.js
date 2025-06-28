import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage_Expert";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=" /" element={<RequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
