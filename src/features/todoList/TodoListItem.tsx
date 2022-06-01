interface TodoProps {
	completed: boolean;
	text: string;
	onClick: () => any;
}

export default function TodoListItem({ text, completed, onClick }: TodoProps) {
	return (
		<li
			onClick={onClick}
			style={{ textDecoration: completed ? "line-through" : "none" }}
		>
			{text}
		</li>
	);
}
