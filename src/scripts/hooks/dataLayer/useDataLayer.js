import React, { useReducer, createContext, useContext } from 'react';

const DataLayer = createContext();

export function DataLayerProvider({ children, reducer, initialState }) {
    return (
        <DataLayer.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayer.Provider>
    );
}

export default function useGlobalDataLayer() {
    return useContext(DataLayer);
}
