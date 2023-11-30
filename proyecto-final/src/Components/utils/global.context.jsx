import React from 'react';
import { createContext, useContext, useEffect} from "react";
import { useReducerContext } from "../../Reducer/reducer";


const CharContext = createContext()

const Context = ({children}) => {
    
    const [state, dispatch, fetchDetailData ] = useReducerContext();

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites'); 
        if (storedFavorites) {
          dispatch({ type: 'ADD_FAVORITES', payload: JSON.parse(storedFavorites) });
        }
      },
      []);
    
      return (
        <CharContext.Provider value={{ state, dispatch, fetchDetailData}}>
          {children}
        </CharContext.Provider>
      );
    };
    
    const useCharContext = () => {
        return useContext(CharContext);
    };
    
    
    export {useCharContext};

    export default Context;