import { useFilterDispatch } from "../FilterContext";

const FilterButton = ({ type, filterItem, text  }) => {
    const dispatch = useFilterDispatch()

    return (
        <li>
            <button className="filter-button" onClick={() => dispatch({ type: type, filterItem: filterItem })}>{text}</button>
        </li>
    )
}

export default FilterButton;