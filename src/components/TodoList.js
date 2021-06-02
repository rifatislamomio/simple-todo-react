import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList, setTodoList, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(item => (
                    <TodoItem
                        item={item}
                        key={item.key}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                ))}
            </ul>
        </div>
    )
}
