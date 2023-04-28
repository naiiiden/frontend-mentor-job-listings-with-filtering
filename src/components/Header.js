import { useFilterValue, useFilterDispatch } from "../FilterContext";

const Header = () => {
    const filter = useFilterValue()
    const dispatch = useFilterDispatch()

    return (
        <header>
            {filter.length > 0 && (
                <>
                    <div className="header-filters-container">
                            <div id="search" type="text" className="filters-container">
                                    {filter.map(item => <button onClick={() => dispatch({ type: 'REMOVE_FILTER', filterItem: item})}>{item}</button>)}
                                <button className="clear--button" onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
                            </div>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;