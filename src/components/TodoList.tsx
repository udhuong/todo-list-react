import * as React from "react";
import {TodoListProps} from "../interfaces/TodoListProps.tsx";
import {Todo} from "../interfaces/Todo.tsx";
import TodoItem from "./TodoItem.tsx";

const TodoList: React.FC<TodoListProps> = ({todos, deleteTodo, toggleComplete}) => {
    return (
        <ul className="todo-list">
            {todos.length === 0 ? <p>Không có công việc nào</p> : null}
            {todos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
            ))}
        </ul>
    );
}

export default TodoList;