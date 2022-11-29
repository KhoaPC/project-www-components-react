import { useRef, useEffect, useState } from "react";

function Input({
  focused,
  value,
  index,
  updateValue,
  setNewIndex,
  placeholder,
}) {
  const [myValue, setMyValue] = useState(value);
  const [isBackSpace, setIsBackSpace] = useState();
  const ref = useRef();

  useEffect(() => {
    if (focused) {
      ref.current.focus();
      ref.current.select();
    }
  }, [focused]);

  const handlerKeyDown = (event) => {
    const KEY_NAME_BACKSPACE = "Backspace";
    setIsBackSpace(event.key === KEY_NAME_BACKSPACE);

    if (event.key === KEY_NAME_BACKSPACE && event.target.value) {
      setNewIndex(index);
    } else if (event.key === KEY_NAME_BACKSPACE && !event.target.value) {
      event.preventDefault();
      setNewIndex(index - 1);
    } else if (event.key === KEY_NAME_BACKSPACE) {
      setNewIndex(index - 1);
    }
    return;
  };

  const handlerOnchange = () => {
    setIsBackSpace((prev) => {
      if (!ref.current.value) {
        return !prev;
      }
    });

    setMyValue(ref.current.value);
    updateValue(index, ref.current.value);

    if (isBackSpace) setNewIndex(index - 1);
    else if (ref.current.value !== "") setNewIndex(index + 1);
    return;
  };

  return (
    <>
      <input
        placeholder={placeholder}
        ref={ref}
        onKeyDown={handlerKeyDown}
        onChange={handlerOnchange}
        className={`input`}
        maxLength={1}
        required
        value={myValue || ""}
      />
    </>
  );
}

export default Input;
