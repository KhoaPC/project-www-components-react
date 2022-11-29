import { useEffect, useState } from "react";

export default function Form2({ label, type, numMax, todoOnChange }) {
/*     const [value, setValue] = useState();

    useEffect(() => {
        todoOnChange(value);
    }, [value]
 */
  return (
    <div className="form">
      <label className="title">{label}</label>

      <input
        type={type}
        onChange={(event) => todoOnChange(event.target.value)}
        maxLength={numMax} />
    </div>
  );
} // Form2