import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Register />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
