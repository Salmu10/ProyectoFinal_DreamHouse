import React, { useState, useEffect } from 'react'
import CategoryService from '../services/CategoryService';

const Context = React.createContext({})

export function CategoryContextProvider({ children }) {
    const [categories, setCategories] = useState([]);

    useEffect(function () {
        CategoryService.getAllCategories()
            .then(({data}) => {
                setCategories(data);
            })
            .catch(e => console.error(e));
    }, [setCategories]);

    return <Context.Provider value={{ categories, setCategories }}>
        {children}
    </Context.Provider>
}

export default Context