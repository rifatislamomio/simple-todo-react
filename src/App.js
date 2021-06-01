import './App.css';
import React, {useState} from 'react'
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("")
  const [todoList, setTodoList] = useState([])


  return (
    <div>
      <header>
        <h2> React Todo-List</h2>
      </header>
      <Form setInputText={setInputText} inputText={inputText}
        setTodoList={ setTodoList } todoList = {todoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList }/>
    </div>  
  );
}

export default App;
