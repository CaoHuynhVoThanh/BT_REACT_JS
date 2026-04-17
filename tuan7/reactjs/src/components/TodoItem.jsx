import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms/todoState";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const toggleDone = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  const saveEdit = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: editText } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <input type="checkbox" checked={todo.isDone} onChange={toggleDone} />

      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.isDone ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}