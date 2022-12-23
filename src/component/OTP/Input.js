import { useRef, useEffect, useState } from "react";

function Input({
  currentIndex,
  output,
  index,
  updateValue,
  setNewIndex,
  length,
  type,
  style,
  disabled,
}) {
  const KEY_BACKSPACE = "Backspace";
  const KEY_ARROW_RIGHT = "ArrowRight";
  const KEY_ARROW_LEFT = "ArrowLeft";
  const [myValue, setMyValue] = useState(output[index]);
  const ref = useRef();

  useEffect(() => {
    const clear = output.every((item) => {
      return !item;
    });
    if (clear) setMyValue("");
  }, [output]);

  useEffect(() => {
    if (currentIndex === index) {
      ref.current.focus();
      ref.current.select();
    }
    // console.log(currentIndex);
  }, [currentIndex]);

  const handlerKeyDown = (event) => {
    if (event.ctrlKey) {
      return;
    }

    if (event.key === KEY_BACKSPACE) {
      event.preventDefault();
      setMyValue("");
      setNewIndex((prev) => --prev);
    } else if (event.key === KEY_BACKSPACE && !event.target.value) {
      event.preventDefault();
      setNewIndex((prev) => --prev);
    } else if (event.key === KEY_BACKSPACE) {
      setNewIndex((prev) => --prev);
    }
    if (event.key === KEY_ARROW_LEFT) {
      event.preventDefault();
      setNewIndex((prev) => --prev);
    }
    if (event.key === KEY_ARROW_RIGHT) {
      event.preventDefault();
      if (length == currentIndex + 1) return;
      setNewIndex((prev) => ++prev);
    }
    if (ref.current.value.length && event.key.length === 1) {
      // un-selected
      if (!(length == currentIndex + 1)) {
        // setNewIndex((prev) => ++prev);
      }
    }

    setNewIndex((prev) => {
      return (prev = Math.max(0, Math.min(length, prev)));
    });
  };

  const handlerOnchange = (event) => {
    event.preventDefault();
    setMyValue(ref.current.value);
    updateValue(index, ref.current.value);
    if (ref.current.value !== "") {
      if (length == currentIndex + 1) {
        return;
      } else {
        // selected
        setNewIndex((prev) => ++prev);
      }
    }
  };

  return (
    <>
      <input
        disabled={disabled}
        style={style}
        onFocus={() => setNewIndex(index)}
        ref={ref}
        onKeyDown={(event) => {
          handlerKeyDown(event);
        }}
        onChange={(event) => handlerOnchange(event)}
        className="input"
        maxLength={1}
        required
        value={myValue || ""}
        type={type}
      />
    </>
  );
}

export default Input;
