import { useEffect, useState } from "react";
import Input from "./Input";
import "./OTP.css";

function OTP({
  inputNum,
  separator,
  placeholder,
  output,
  setOutput,
  isNumber,
  isPassword,
  hasErrored,
  isDisable,
  checkOutput
}) {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  useEffect(() => {
    setOutput(Array.from({ length: inputNum }));
  }, [inputNum]);
  const [type, setType] = useState("");
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (isNumber) {
      setType("number");
    } else if (isPassword) {
      setType("password");
    } else if (hasErrored) {
      setStyle({
        border: "1px solid red",
      });
    }
  }, [isNumber, isDisable, isPassword, hasErrored]);
  
  function updateChar(index, value) {
    return setOutput((current) =>
      current.map((char, myIndex) => (index !== myIndex ? char : value))
    );
  }

  return (
    <>
      <div className="container_OTP">
        {output.map((item, index) => {
          const outputLength = output.length;
          return (
            <div className="wrap-input" key={index}>
              <Input
                disabled={isDisable}
                style={style}
                type={type}
                length={output.length}
                placeholder={placeholder}
                value={output[index]}
                index={index}
                currentIndex={currentCharIndex}
                setNewIndex={(index) => setCurrentCharIndex(index)}
                updateValue={updateChar}
              />
              <span className="separator">
                {index !== outputLength - 1 ? separator : ""}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OTP;
