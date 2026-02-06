import React from "react";

function reducer(state, action) {
  if (action.type==="inc") return state + 1;
  if (action.type==="dec") return state - 1;
  return state;
}

function Counter2() {
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <h2>Demo useReducer tăng giảm giá trị count</h2>
      <p>{count}</p>
      <button onClick={()=>dispatch({ type: "inc" })}>+</button>
      <button onClick={()=>dispatch({ type: "dec" })}>-</button>
      <p>Sau mỗi lần bấm nút, giá trị count sẽ được cập nhật thông qua reducer, component này sẽ re-render lại. Reduce giúp quản lý trạng thái phức tạp một cách dễ dàng hơn useState.</p>
    </>
  );
}
export default Counter2;