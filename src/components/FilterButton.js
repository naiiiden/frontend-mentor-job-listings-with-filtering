import { useFilterDispatch } from "../FilterContext";

const FilterButton = ({ filterItem, text  }) => {
    const dispatch = useFilterDispatch()

    return (
        <li>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: filterItem })}>{text}</button>
        </li>
    )
}

export default FilterButton;