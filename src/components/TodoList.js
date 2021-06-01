import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList, setTodoList }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todoList.map(item => (
                    <TodoItem
                        item={item}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                ))}
            </ul>
        </div>
    )
}
