import images from "../../assets/img";

function ZoomImg() {
  return (
    <div>
      <img src={images.img} />
      <img src={images.img_1} />
      <img src={images.img_2} />
    </div>
  );
}

export default ZoomImg;
