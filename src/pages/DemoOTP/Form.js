import { useEffect, useRef, useState } from "react";

function Form({ type, lable, value, numMax, callBack }) {
  const ref = useRef();
  const handler = (event) => {
    if (numMax && +ref.current.value > numMax) {
      ref.current.value = numMax;
    }
    value = ref.current.value;
    callBack(value);
  };

  return (
    <form className="form">
      <label className="title">{lable}</label>
      <input
        ref={ref}
        onChange={(event) => {
          handler(event);
        }}
        value={value || ""}
        type={type}
      />
    </form>
  );
}

export default Form;
