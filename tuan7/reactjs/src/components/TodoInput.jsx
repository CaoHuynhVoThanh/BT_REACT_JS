import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todoState";

export default function TodoInput() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoState);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        isDone: false,
      },
    ]);

    setText("");
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}