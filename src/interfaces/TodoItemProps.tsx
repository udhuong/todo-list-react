import {Todo} from "./Todo.tsx";

export interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: string) => void;
    toggleComplete: (id: string) => void;
}