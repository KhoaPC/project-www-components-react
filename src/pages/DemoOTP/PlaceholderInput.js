import { useState } from "react";
function PlaceholderInput({ type, lable, value, numMax, callBack }) {

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

export default PlaceholderInput;
