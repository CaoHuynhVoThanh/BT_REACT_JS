import { useRef } from "react";

function FocusInput() {
  const inputRef=useRef();

  return (
    <>
    <h2>Demo useRef khi ấn nút</h2>
      <input ref={inputRef} />
      <button onClick={()=>inputRef.current.focus()}>
        Focus
      </button>
      <p>Khi ấn nút Focus, input sẽ được focus nhưng không làm trang web re-render lại.</p>
    </>
  );
}
export default FocusInput;