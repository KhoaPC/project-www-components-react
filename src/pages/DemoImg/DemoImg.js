import "./DemoImg.css";
import ControllerImg from "./ShowImg";
import { useEffect, useState } from "react";
import ImgZoomMove from "../../component/ImgZoomMove/ImgZoomMove";
import images from "../../assets/img";
import MiniImg from "./MiniImg";

function DemoImg() {
  const [showControll, setShowControll] = useState(false);
  const [imgControll, setImgControll] = useState(images.zoom);
  const [zoomMoveImg, setZoomMoveImg] = useState(images.zoom);

  const handlerPrevImg = () => {
    console.log("Prev");
  };

  const handlerNextImg = () => {
    console.log("Next");
  };

  const handlerClose = () => {
    setShowControll(false);
  };

  return (
    <div className="content">
      {showControll && (
        <ControllerImg
          handlerClose={handlerClose}
          next={handlerNextImg}
          prev={handlerPrevImg}
          ulrImg={imgControll}
        />
      )}

      <ImgZoomMove
        setShowControll={(value) => setShowControll(value)}
        setImgControll={(img) => setImgControll(img)}
        urlImg={zoomMoveImg}
      ></ImgZoomMove>

      <div className="container-mini-img">
        <MiniImg
          click={(img) => {
            setZoomMoveImg(img);
          }}
          img={images.img}
        ></MiniImg>
        <MiniImg
          click={(img) => {
            setZoomMoveImg(img);
          }}
          img={images.img_1}
        ></MiniImg>
        <MiniImg
          click={(img) => {
            setZoomMoveImg(img);
          }}
          img={images.img_2}
        ></MiniImg>
        <MiniImg
          click={(img) => {
            setZoomMoveImg(img);
          }}
          img={images.zoom}
        ></MiniImg>
      </div>
    </div>
  );
}

export default DemoImg;
