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
  otp,
  checkOutput,
}) {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    setOutput(Array.from({ length: inputNum }));
  }, [inputNum]);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (hasErrored)
      setStyle({
        border: "1px solid red",
      });
    else setStyle({});
  }, [ isDisable, hasErrored]);

  const updateChar = (index, value) => {
    return setOutput((current) =>
      current.map((char, myIndex) => (index !== myIndex ? char : value))
    );
  };

  const handlerCheckOutput = () => {
    const result = +output.join("");
    if (result === otp && output.length > 0) {
      alert("Valid OTP ✔");
    } else {
      alert("OTP invalid !");
    }
  };

  const handlerClear = () => {
    setOutput(Array.from({ length: inputNum }));
  };

  return (
    <>
      <div className="container_OTP">
        <div className="modal-otp">
          <h2>Enter verification code:</h2>
          <h2 className="code-otp">{otp ? otp : ""}</h2>
          <div className="container-inner">
            {output.map((item, index) => {
              const outputLength = output.length;
              return (
                <div className="wrap-input" key={index}>
                  <Input
                    isNumber={isNumber}
                    isPassword={isPassword}
                    disabled={isDisable}
                    style={style}
                    length={output.length}
                    placeholder={placeholder}
                    output={output}
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
          <div className="wrap-btn">
            <button
              disabled={output.length ? false : true}
              style={
                output.length
                  ? {}
                  : {
                      background: "#999",
                      cursor: "no-drop",
                    }
              }
              onClick={handlerClear}
            >
              Clear
            </button>
            <button
              disabled={output.length ? false : true}
              style={
                output.length
                  ? {}
                  : {
                      background: "#999",
                      cursor: "no-drop",
                    }
              }
              onClick={handlerCheckOutput}
            >
              Check OTP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTP;
