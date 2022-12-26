import "./DemoOTP.css";
import { useEffect, useState } from "react";
import OTP from "../../component/OTP/OTP";
import Form from "./Form";

function DemoOTP() {
  const [num, setNum] = useState(0);
  const [separator, setSeparator] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [randomOTP, setOTP] = useState(0);
  const [output, setOutput] = useState(Array.from({ length: num }));
  document.title = 'OTP Input';

  const randomNum = (maxLength) => {
    setOTP(Math.floor(Math.random() * "1".padEnd(+maxLength + 1, 0)));
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <Form
            label="Input Num"
            type="number"
            numMax={10}
            todoOnChange={(value) => {
              setNum(value);
              randomNum(value);
            }}
          />

          <Form
            label="Separator"
            type="text"
            todoOnChange={(value) => setSeparator(value)}
          />

          <Form
            label="isNumber"
            type="checkbox"
            todoOnChange={(value) => setIsNumber(value)}
          />
          <Form
            label="isPassword"
            type="checkbox"
            todoOnChange={(value) => setIsPassword(value)}
          />
          <Form
            label="isDisabled"
            type="checkbox"
            todoOnChange={(value) => setIsDisable(value)}
          />
          <Form
            label="hasErrored"
            type="checkbox"
            todoOnChange={(value) => setHasErrored(value)}
          />
        </nav>
        <OTP
          otp={randomOTP}
          output={output}
          setOutput={setOutput}
          inputNum={num}
          separator={separator}
          isNumber={isNumber}
          isPassword={isPassword}
          hasErrored={hasErrored}
          isDisable={isDisable}
        ></OTP>
      </div>
    </>
  );
}

export default DemoOTP;
