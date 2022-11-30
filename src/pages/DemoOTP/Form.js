import { useEffect, useState } from "react";

export default function Form2({ label, type, numMax, todoOnChange }) {
  const handler = (event) => {
    if (+event.target.value > numMax) {
      event.target.value = numMax;
    }
    todoOnChange(event.target.value);
  };

  return (
    <div className="form">
      <label className="title">{label}</label>
      <input type={type} onChange={(event) => handler(event)} />
    </div>
  );
} // Form2
