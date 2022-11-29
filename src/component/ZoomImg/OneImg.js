import "./Img.css";
import images from "../../assets/img";

function OneImg() {
  return (
    <div>
      <img className="img" src={images.img} />
    </div>
  );
}

export default OneImg;
