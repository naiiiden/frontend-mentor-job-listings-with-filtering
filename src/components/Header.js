import { useFilterValue, useFilterDispatch } from "../FilterContext";
import FilterButton from "./FilterButton";

const Header = () => {
    const filter = useFilterValue()
    const dispatch = useFilterDispatch()

    return (
        <header>
            <h1 className="sr-only">Developer Jobs Board</h1>
            {filter.length > 0 && (
                <>
                    <div className="header-filters-container">
                            <div id="search" className="filters-container">
                                <ul>
                                    {filter.map((item, index) =>
                                        <li key={index}>
                                            <button className="filter-button" onClick={() => dispatch({ type: 'REMOVE_FILTER', filterItem: item })}>{item} <span>X</span></button>
                                        </li>
                                        // <FilterButton key={index} type='REMOVE_FILTER' filterItem={item} text={[item, <span>X</span>]}/>
                                    )}
                                </ul>
                                <button className="clear--button" onClick={() => dispatch({ type: 'CLEAR' })} aria-label="Clear filters">Clear</button>
                            </div>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;