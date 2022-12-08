import { useRef, useEffect, useState } from "react";
import E from "react-script";

function Input({
  currentIndex,
  value,
  index,
  updateValue,
  setNewIndex,
  length,
}) {
  const KEY_BACKSPACE = "Backspace";
  const KEY_ARROW_RIGHT = "ArrowRight";
  const KEY_ARROW_LEFT = "ArrowLeft";
  const c = console.log;
  const [myValue, setMyValue] = useState(value);
  const [isBackSpace, setIsBackSpace] = useState();
  const ref = useRef();

  useEffect(() => {
    if (currentIndex === index) {
      ref.current.focus();
      ref.current.select();
    }
  }, [currentIndex]);

  const handlerKeyDown = (event) => {
    setIsBackSpace(event.key === KEY_BACKSPACE);

    if(event.ctrlKey) {
      return;
    }

    if (event.key === KEY_BACKSPACE && event.target.value) {
      setNewIndex(index);
    } else if (event.key === KEY_BACKSPACE && !event.target.value) {
      event.preventDefault();
      setNewIndex((prev) => --prev);
    } else if (event.key === KEY_BACKSPACE) {
      setNewIndex((prev) => --prev);
    } else if (event.key === KEY_ARROW_LEFT) {
      event.preventDefault();
      setNewIndex((prev) => --prev);
    } else if (event.key === KEY_ARROW_RIGHT) {
      event.preventDefault();
      setNewIndex((prev) => ++prev);
    }

    if (ref.current.value.length > 0 && event.key.length === 1) {
      setNewIndex((prev) => ++prev);
    }

    setNewIndex((prev) => {
      return (prev = Math.max(0, Math.min(length, prev)));
    });
  };

  const handlerOnchange = () => {
    setMyValue(ref.current.value);
    updateValue(index, ref.current.value);

    if (isBackSpace) {
      setNewIndex((prev) => --prev);
    }
    if (ref.current.value !== "") {
      setNewIndex((prev) => ++prev);
    }
  };

  return (
    <>
      <input
        onFocus={() => setNewIndex(index)}
        ref={ref}
        onKeyDown={(event) => {
          handlerKeyDown(event);
        }}
        onChange={handlerOnchange}
        className="input"
        maxLength={1}
        required
        value={myValue || ""}
      />
    </>
  );
}

export default Input;
