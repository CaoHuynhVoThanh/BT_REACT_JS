import { useRecoilValue } from "recoil";
import { todoState } from "../atoms/todoState";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(todoState);

  return (
    <div style={{ marginTop: 20 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}