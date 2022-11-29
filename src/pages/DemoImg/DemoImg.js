import "./DemoImg.css";
import ZoomImg from "../../component/ZoomImg/AllImg";
import ControllerImg from "./ControllerImg";
import { useState } from "react";

function DemoImg() {
  const [showControll, setShowControll] = useState(false);

  const handlerClick = () => {
    setShowControll((prev) => !prev);
  };
  return (
    <div className="container">
      {showControll && <ControllerImg click={handlerClick}/>}

      <ZoomImg click={handlerClick} />
    </div>
  );
}

export default DemoImg;
