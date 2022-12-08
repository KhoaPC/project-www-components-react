import "./DemoImg.css";
import OneImg from "./ImgZoomClick";
import images from "../../assets/img";

function ControllerImg({
  ulrImg,
  close,
  prev,
  next,
}) {
  return (
    <div className="overlay">
      <div>
        <span onClick={() => close()} className="icon close">
          X
        </span>

        {/* <span onClick={() => prev()} className="icon prev">
          ◀
        </span>
        <span onClick={() => next()} className="icon next">
          ▶
        </span> */}
      </div>

      <OneImg img={ulrImg }></OneImg>
       
    </div>
  );
}

export default ControllerImg;
