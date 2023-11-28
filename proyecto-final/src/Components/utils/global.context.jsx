import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer} from "react";
import { reducer } from "../../Reducer/reducer";

const CharContext = createContext()

const initialState = {
    list: [],
    favs: localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : [],
    theme: true,
    form: {
      name: "",
      email: "",
      submitted: false,
    },
    dentist: {},
}

const Context = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data.results}))
    }, []);

    const getDentistDetails = async (id) => {
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/users/:id`);
        const data = response.data;
        dispatch({ type: 'SET_DENTIST', payload: data });
      } catch (error) {
        console.error('Error fetching dentist details', error);
      }
    };

    const addToFavorites = (character) => {
      dispatch({ type: 'ADD_FAV', payload: character });
    };

    const removeFromFavorites = (character) => {
      dispatch({ type: 'DELETE_FAV', payload: character });
    };

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(state.favs));
    }, [state.favs]);

    return (
        <CharContext.Provider value={{state, dispatch, getDentistDetails, addToFavorites, removeFromFavorites}}>
            {children}
        </CharContext.Provider>
    )

}
export const useCharContext = () => useContext(CharContext);
export default Context;