import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestPageE from "./pages/RequestPage_Expert";
import RequestPageN from "./pages/RequestPage_Normal";
import RequestPageM from "./pages/RequestPage_Maniac";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request/Experts" element={<RequestPageE />} />
        <Route path="/request/Normal" element={<RequestPageN />} />
        <Route path="/request/Maniac" element={<RequestPageM />} />
      </Routes>
    </Router>
  );
}

export default App;
