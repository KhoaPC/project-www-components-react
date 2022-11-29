import "./DemoOTP.css";
import { useState, useEffect } from "react";
import OTP from "../../component/OTP/OTP";
import NumInput from "./NumInput";
import Form from "./Form";
import PlaceholderInput from "./PlaceholderInput";
import SeparatorInput from "./SeparatorInput";

function DemoOTP() {
  const [num, setNum] = useState();
  const [separator, setSeparator] = useState();
  const [placeholder, setPlaceholder] = useState();
  const [value, setValue] = useState();

  return (
    <div className="container">
      <nav className="navbar">
        <Form
          value={value}
          callBack={(val) => {
            setValue(val);
          }}
          lable="Input"
        />
        <Form
          value={value}
          callBack={(val) => {
            setValue(val);
          }}
          lable="Input NumX"
          type="number"
        />

        <NumInput
          value={num}
          callBack={(val) => {
            setNum(val);
          }}
          numMax={10}
          lable="Input Num"
          type="number"
        />
        <SeparatorInput
          value={separator}
          callBack={(val) => {
            setSeparator(val);
          }}
          lable="Separator"
        />
        {/* <PlaceholderInput
          value={placeholder}
          callBack={(val) => {
            setPlaceholder(val);
          }}
          lable="Placeholder"
        /> */}
      </nav>
      <OTP inputNum={num} separator={separator} placeholder={placeholder}></OTP>
    </div>
  );
}

export default DemoOTP;