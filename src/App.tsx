import {useEffect, useState} from "react";
import {Todo} from "./interfaces/Todo.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoForm from "./components/TodoForm.tsx";

function App() {
    // Hàm lấy dữ liệu từ localStorage ngay từ khi khởi tạo state
    const getInitialTodos = (): Todo[] => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    };

    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

    // Lưu dữ liệu vào localStorage mỗi khi danh sách thay đổi
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Thêm công việc mới
    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    // Xóa công việc
    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // Chuyển trạng thái hoàn thành
    const toggleComplete = (id: string) => {
        const todosNew: Todo[] = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(todosNew);
    }

    return (
        <div className="app">
            <h1>📝 To-Do List</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
        </div>
    );
}

export default App;