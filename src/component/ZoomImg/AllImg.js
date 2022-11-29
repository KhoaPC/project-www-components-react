import "./Img.css";
import images from "../../assets/img";

function ZoomImg({ click }) {
  return (
    <div className="container-img">
      <img onClick={() => click()} className="img-mini" src={images.img} />
      <img onClick={() => click()} className="img-mini" src={images.img_1} />
      <img onClick={() => click()} className="img-mini" src={images.img_2} />
    </div>
  );
}

export default ZoomImg;
