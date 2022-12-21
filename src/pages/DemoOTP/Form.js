import { useEffect, useState } from "react";

export default function Form({ label, type, numMax, todoOnChange }) {
  const [classes, setClasses] = useState("");

  const changeValue = (event) => {
    if (+event.target.value > numMax) {
      event.target.value = numMax;
    }
    if (type === "radio" || type === "checkbox") {
      todoOnChange(event.target.checked === true);
    } else {
      todoOnChange(event.target.value);
    }
  };

  useEffect(() => {
    if (type === "radio" || type === "checkbox") {
      setClasses("check");
    }
  }, []);

  return (
    <div className="form">
      <label className={`title-input ${classes}`}>
        {label}
        <input type={type} onChange={(event) => changeValue(event)} />
      </label>
    </div>
  );
} // Form
