import './App.css';
import React, {useState, useEffect} from 'react'
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() { 
  //States
  const [inputText, setInputText] = useState("")
  const [todoList, setTodoList] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  //Effects
  useEffect(() => {
    getFromLocal()
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todoList, status])


  //Handlers
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todoList.filter(item =>item.completed === true))
        break
      
      case 'uncompleted':
        setFilteredTodos(todoList.filter(item => item.completed === false))
        break;
    
      default:
        setFilteredTodos(todoList)
        break;
    }
  }

  //Local Storage Setup
  const saveToLocal = () =>
  {
    localStorage.setItem("todo", JSON.stringify(todoList))
  }

  const getFromLocal = () => {
    if (localStorage.getItem('todo') === null) {
      localStorage.setItem("todo", JSON.stringify([]))
    }
    else {
      var parsedData = JSON.parse(localStorage.getItem("todo"))
      setTodoList(parsedData)
    }
  }
  
  return (
    <div>
      <header>
        <h2>React Todo-List</h2>
      </header>
      <Form setInputText={setInputText} inputText={inputText}
        setTodoList={setTodoList} todoList={todoList}
        setStatus = {setStatus} 
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} filteredTodos={ filteredTodos}/>
    </div>  
  );
}

export default App;
