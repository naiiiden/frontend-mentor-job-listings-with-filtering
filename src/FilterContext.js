import { createContext, useReducer, useContext } from "react";

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FILTER': return state.includes(action.filterItem) ? state : [...state, action.filterItem]
        case 'REMOVE_FILTER': return state.filter(item => item !== action.filterItem)
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

    return (
        <FilterContext.Provider value={[filter, filterDispatch]}>
            {props.children}
        </FilterContext.Provider>
    )
}