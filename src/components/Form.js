import React from 'react'

export const Form = ({ inputText, setInputText, todoList, setTodoList, setStatus }) => {

    //Handler Functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText.trim() !== "") {
            setTodoList([...todoList, {
                text: inputText,
                completed: false,
                key: Math.random() * 10000
            }])
            setInputText("")
        }
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler} >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={statusHandler}>
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
