import { useState } from "react";

function Counter() {
  const [count, setCount]=useState(0);

  return (
    <div>
    <h2>Demo useState lưu giá trị count khi bấm tăng</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>+</button>
      <p>Sau mỗi lần bấm tăng, giá trị count sẽ được cập nhật, component này sẽ re-render lại.</p>
    </div>
  );
}
export default Counter;