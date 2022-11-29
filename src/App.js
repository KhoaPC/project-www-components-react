import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./deafaultLayout/Header/Header";
import Home from "./pages/Home/Home";
import DemoOTP from "./pages/DemoOTP/DemoOTP";
import Page404 from "./pages/Page404/Page404";
import ZoomImg from "./component/ZoomImg/ZoomImg";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/OTP" element={<DemoOTP />}></Route>
        <Route path="/img" element={<ZoomImg />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
}
{
  /* <OTP inputNum={6} separator="-"></OTP> */
}
export default App;
