import { Route, Router, Routes } from "react-router";
import { Link } from "react-router-dom";
import images from "../../assets/img";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <h1 className="title-page">Preview Demo Page</h1>
      <div className="container-product">
        <div className="product">
          <Link to="/OTP">
            <div className="title">OTP input</div>
            <img className="img-product" src={images.otp_home} />
          </Link>
        </div>
        <div className="product">
          <Link to="/img">
            <div className="title">Zoom images</div>
            <img className="img-product" src={images.zoom} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
