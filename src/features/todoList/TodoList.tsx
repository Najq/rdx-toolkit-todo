import TodoListItem from "./TodoListItem";
import { RootState } from "app/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "./todoSlice";
import { Todo } from "./types";
import { VisibilityFilter } from "features/visibilityFilter/visibilityFilterSlice";

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
	switch (filter) {
		case VisibilityFilter.ShowAll:
			return todos;
		case VisibilityFilter.ShowActive:
			return todos.filter(todo => !todo.completed);
		case VisibilityFilter.ShowCompleted:
			return todos.filter(todo => todo.completed);
		default:
			throw new Error("Unknown Filter: " + filter);
	}
};

export default function TodoList() {
	const dispatch = useDispatch();
	const todos = useSelector((state: RootState) =>
		getVisibleTodos(state.todos, state.visibilityFilter)
	);

	return (
		<ul>
			{todos.map(todo => (
				<TodoListItem
					key={todo.id}
					{...todo}
					onClick={() => dispatch(toggleTodo(todo))}
				/>
			))}
		</ul>
	);
}
