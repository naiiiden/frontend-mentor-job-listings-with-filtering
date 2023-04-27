import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterContextProvider } from './FilterContext';

ReactDOM.createRoot(document.getElementById("root")).render(
    <FilterContextProvider>
        <App/>
    </FilterContextProvider>
);
