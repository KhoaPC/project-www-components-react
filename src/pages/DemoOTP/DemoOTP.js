import "./DemoOTP.css";
import { useState } from "react";
import OTP from "../../component/OTP/OTP";
import Form from "./Form";

function DemoOTP() {
  const [num, setNum] = useState();
  const [separator, setSeparator] = useState();
  const [placeholder, setPlaceholder] = useState();

  return (
    <div className="container">
      <nav className="navbar">
        <Form
          label="Input Num"
          type="number"
          numMax={10}
          todoOnChange={(value) => setNum(value)}
        />

        <Form
          label="Separator"
          type="text"
          todoOnChange={(value) => setSeparator(value)}
        />

        {/* <Form
          label="Placeholder"
          type="text"
          todoOnChange={(value) => setPlaceholder(value)}
        /> */}
      </nav>

      <OTP inputNum={num} separator={separator} placeholder={placeholder}></OTP>
    </div>
  );
}

export default DemoOTP;
