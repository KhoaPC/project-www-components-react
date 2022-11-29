import { useState } from "react";
function SeparatorInput({ type, lable, value, numMax, callBack }) {
  const [myValue, setMyValue] = useState(value);

  const handler = (event) => {
    value = event.target.value;
    callBack(value)
  };

  return (
    <form className="form">
      <label className="title">{lable}</label>
      <input
        onChange={(event) => {
          handler(event);
        }}
        value={value || ""}
        type={type}
      />
    </form>
  );
}

export default SeparatorInput;
