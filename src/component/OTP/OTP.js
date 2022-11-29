import { useEffect, useState } from "react";
import Input from "./Input";
import "./OTP.css";

function OTP({ inputNum, separator, placeholder }) {
  const [output, setOutput] = useState(Array.from({ length: inputNum })); // ???
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    setOutput(Array.from({ length: inputNum }));
  }, [inputNum, separator]);

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
                placeholder={placeholder}
                focused={index === currentCharIndex}
                value={output[index]}
                index={index}
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

      {/* <p>Output:</p>
      <span>{output.join("    ")}</span> */}
    </>
  );
}

export default OTP;
