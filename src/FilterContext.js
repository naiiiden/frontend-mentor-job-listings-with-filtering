import { createContext, useReducer, useContext } from "react";

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FILTER': return [...state, action.filterItem]
        case 'CLEAR': return []
        default: return state
    }
}

const FilterContext = createContext()

export const useFilterValue = () => {
    const filterAndDispatch = useContext(FilterContext)
    return filterAndDispatch[0]
}

export const useFilterDispatch = () => {
    const filterAndDispatch = useContext(FilterContext)
    return filterAndDispatch[1]
}

export const FilterContextProvider = (props) => {
    const [filter, filterDispatch] = useReducer(filterReducer, [])

    console.log('one', filter)

    return (
        <FilterContext.Provider value={[filter, filterDispatch]}>
            {props.children}
        </FilterContext.Provider>
    )
}