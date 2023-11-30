import React from 'react';
import { createContext, useContext, useEffect} from "react";
import { useReducerContext } from "../../Reducer/reducer";


const CharContext = createContext()

const Context = ({children}) => {
    
    const [state, dispatch, fetchDetailData ] = useReducerContext();

    useEffect(() => {
        const storedFavs = localStorage.getItem('favs'); 
        if (storedFavs) {
          dispatch({ type: 'ADD_FAV', payload: JSON.parse(storedFavs) });
        }
      }, []);
    
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