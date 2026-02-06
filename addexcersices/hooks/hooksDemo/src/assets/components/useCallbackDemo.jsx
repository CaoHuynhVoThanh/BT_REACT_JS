import { useCallback } from "react";

function HelloButton() {
  const sayHello=useCallback(()=>{
    alert("Xin chào!");
  }, []);

  return <div>
  <h2>Demo useCallback Hello</h2>
    <button onClick={sayHello}>Chào</button>
    <p>Khi ấn nút Chào, hàm sayHello sẽ được gọi mà không làm component re-render lại nhờ useCallback.</p>
  </div>;
}
export default HelloButton;