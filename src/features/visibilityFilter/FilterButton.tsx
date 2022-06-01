import { setVisibilityFilter, VisibilityFilter } from "./visibilityFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";

interface FilterButtonProps {
	visibilityFilter: VisibilityFilter;
	text: string;
}

export default function FilterButton({
	visibilityFilter,
	text,
}: FilterButtonProps) {
	const dispatch = useDispatch();

	const currentVisibilityFilter = useSelector(
		(state: RootState) => state.visibilityFilter
	);

	return (
		<button
			disabled={currentVisibilityFilter === visibilityFilter}
			onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
		>
			{text}
		</button>
	);
}
