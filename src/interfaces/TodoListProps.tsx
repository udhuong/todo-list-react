import {Todo} from "./Todo.tsx";

export interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    toggleComplete: (id: string) => void;
}