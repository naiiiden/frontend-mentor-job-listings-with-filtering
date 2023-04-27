import { createContext, useReducer, useContext } from "react";

const filterReducer = (state, action) => {
    console.log(1, state)

    switch (action.type) {
        case 'ADD_FILTER': return state.includes(action.filterItem) ? state : [...state, action.filterItem]
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