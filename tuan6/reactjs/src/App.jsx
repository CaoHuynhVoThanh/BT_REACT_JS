import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from './atoms/userAtom';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {


  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>Todo List (Recoil)</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;