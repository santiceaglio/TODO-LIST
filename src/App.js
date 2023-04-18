import { Title } from "./components/title/Title.jsx";
import { Todo } from "./components/Todo/Todo.jsx";
import { TodoInput } from "./components/todoInput/TodoInput.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { useState } from "react";

function App() {

// const [todos, setTodos] = useState([
//   {
//     id: 1,
//     title: "Read a book",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Ride a bike",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Wash my car",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Have excercise",
//     completed: false,
//   }
// ])

  return (
    <div className="bg-gray-200 min-h-screen h-full fount- babes text-gray-100 flex items-center justify-center py-20 px-5"
    >
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
        <TodoList>
          <Todo />
        </TodoList>

      </div>
    </div>
  );
}

export default App;
