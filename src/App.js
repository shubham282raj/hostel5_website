import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Tech from "./pages/tech/tech";
import Cult from "./pages/cult/cult";
import Sports from "./pages/sports/sports";
import Mess from "./pages/mess/mess";
import Council from "./pages/council/council";
import LoginCouncil from "./pages/council/login/login";
import CreatePost from "./pages/council/createPost/createPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/cult" element={<Cult />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/mess" element={<Mess />} />
          <Route path="/council">
            <Route path="" element={<Council />} />
            <Route path="login" element={<LoginCouncil />} />
            <Route path="createPost" element={<CreatePost />} />
          </Route>
        </Routes>
      </Router>
      <div className="footerNavMargin"></div>
    </div>
  );
}

export default App;
