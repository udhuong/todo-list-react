import * as React from "react";
import {TodoFormProps} from "../interfaces/TodoFormProps.tsx";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const [text, setText] = useState<string>("");
    const placeholder: string = "Thêm công việc mới...";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) {
            return;
        }
        addTodo({id: uuidv4(), text, completed: false});
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default TodoForm;