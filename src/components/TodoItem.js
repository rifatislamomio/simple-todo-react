import React from 'react'

export const TodoItem = ({ item, setTodoList, todoList }) => {
    //Handlers
    const completedTodo = () => {
        item.completed = true
        setTodoList([...todoList])
    };
    
    const deleteTodo = () => {
        todoList = todoList.filter((tItem) => tItem!== item)
        setTodoList([...todoList])
    };
    return (
        <div className={ item.completed? "todo completed" : "todo"}>
            <li className="todo-item">{item.text}</li>
            <button className="complete-btn" onClick={completedTodo}> <i className="fas fa-check"> </i> </button>
            <button className="trash-btn" onClick={deleteTodo}> <i className="fas fa-trash"> </i> </button>
        </div>
    )
}
