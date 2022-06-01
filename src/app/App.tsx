import { useEffect } from "react";

import AddTodo from "features/todoList/AddTodo";
import TodoList from "features/todoList/TodoList";
import "./App.css";
import Footer from "features/visibilityFilter/Footer";
import { useDispatch } from "react-redux";
import { loadTodos, createTodoList } from "features/todoList/todoSlice";

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.location.pathname === "/") {
			dispatch<any>(createTodoList());
		} else {
			dispatch<any>(loadTodos());
		}
	}, [dispatch]);

	return (
		<div>
			<AddTodo />
			<TodoList />
			<Footer />
		</div>
	);
}
