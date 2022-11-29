import { useRef, useEffect, useState } from "react";

function Input({
  focused,
  value,
  index,
  updateValue,
  setNewIndex,
  placeholder,
}) {
  const ref = useRef();
  const [myValue, setMyValue] = useState(value);
  const [isBackSpace, setIsBackSpace] = useState();
  useEffect(() => {
    if (focused) {
      ref.current.focus();
      ref.current.select();
    }
  }, [focused]);

  useEffect(() => {}, [isBackSpace]);

  const handlerKeyDown = (event) => {
    const KEY_NAME_BACKSPACE = "Backspace";

    setIsBackSpace(event.key === KEY_NAME_BACKSPACE);
    if (event.key === KEY_NAME_BACKSPACE && event.target.value) {
      setNewIndex(index);
      event.target.value = "";
    } else if (event.key === KEY_NAME_BACKSPACE) {
      setNewIndex(index - 1);
    }
  };

  const handlerOnchange = () => {
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
