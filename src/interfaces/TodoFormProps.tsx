import {Todo} from "./Todo.tsx";

export interface TodoFormProps {
    addTodo: (todo: Todo) => void;
}