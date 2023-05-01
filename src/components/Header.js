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
                                    {filter.map((item, index) => <FilterButton key={index} filterItem={item} text={[item, <span>X</span>]}/>)}
                                </ul>
                                <button className="clear--button" onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
                            </div>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;