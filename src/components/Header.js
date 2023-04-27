import { useFilterValue, useFilterDispatch } from "../FilterContext";

const Header = () => {
    const filter = useFilterValue()
    const dispatch = useFilterDispatch()

    return (
        <header>
            <div className="header--form">
                <label htmlFor="search" className="form--label">
                    <span className="label--invisible">Search</span>
                    <input id="search" type="text" className="text--input"/>
                </label>
                    <button className="clear--button" onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
            </div>
            <div className="header-filter-board">
                {filter.map(item => <button onClick={() => dispatch({ type: 'REMOVE_FILTER', filterItem: item})}>{item}</button>)}
            </div>
        </header>
    )
}

export default Header;