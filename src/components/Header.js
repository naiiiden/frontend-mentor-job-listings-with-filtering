import { useFilterValue, useFilterDispatch } from "../FilterContext";

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
                                    {filter.map((item, index) => <button className="filter-button" key={index} onClick={() => dispatch({ type: 'REMOVE_FILTER', filterItem: item})}>{item}<span>X</span></button>)}
                                <button className="clear--button" onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
                            </div>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;