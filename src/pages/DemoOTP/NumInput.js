import { useState } from "react";
function NumInput({ type, lable, value, numMax, callBack }) {
  const handler = (event) => {
    if (+event.target.value > numMax) {
      event.target.value = numMax;
    }
    value = event.target.value;
    callBack(value);
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

export default NumInput;
