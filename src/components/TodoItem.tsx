import * as React from "react";
import {TodoItemProps} from "../interfaces/TodoItemProps.tsx";

const TodoItem: React.FC<TodoItemProps> = ({todo, deleteTodo, toggleComplete}) => {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`} onClick={() => toggleComplete(todo.id)}>
            <span>{todo.text}</span>
            <button onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
            }}>X</button>
        </li>
    );
}
export default TodoItem;