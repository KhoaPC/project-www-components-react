import "./DemoImg.css";
import ControllerImg from "./ImgZoomClick";
import { useState } from "react";
import ImgZoomMove from "../../component/ImgZoomMove/ImgZoomMove";
import images from "../../assets/img";
import MiniImg from "./MiniImg";

function DemoImg() {
  const [showControll, setShowControll] = useState(false);
  const [imgControll, setImgControll] = useState(images.zoom);
  const [zoomMoveImg, setZoomMoveImg] = useState(images.zoom);

  const handlerOpenControll = () => {
    setShowControll(true);
  };

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
    <div className="container">
      {showControll && (
        <ControllerImg
          close={handlerClose}
          next={handlerNextImg}
          prev={handlerPrevImg}
          ulrImg={imgControll}
        />
      )}

      <ImgZoomMove
        click={(img) => {
          setImgControll(img);
          handlerOpenControll();
        }}
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
