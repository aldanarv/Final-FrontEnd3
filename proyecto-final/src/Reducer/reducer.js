import { useEffect, useReducer } from "react";

const initialState = {
    dentist: {},
    list: [],
    favs: [],
    theme: true,
  };

const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DENTISTS':
            return {...state, list: action.payload}
        case 'GET_DENTIST': 
            return {...state, dentist: action.payload}
        case 'ADD_FAV':
            return { ...state, favs: [...state.favs, action.payload] };
        case 'DELETE_FAV':
            return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id) };
        case 'CHANGE_THEME':
            return {...state, theme: !state.theme}
        case 'SET_FORM_FIELD':
            return {
                ...state,
                form: {
                ...state.form,
                [action.field]: action.value,
                },
            };
        case 'SUBMIT_FORM':
            return {
                ...state,
                form: {
                ...state.form,
                submitted: true,
                },
            };
        case 'RESET_FORM':
            return {
                ...state,
                form: {
                name: '',
                email: '',
                submitted: false,
                },
            };
        default:
            return state
    }
};

const useReducerContext = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const clearLocalStorage = () => {
            localStorage.removeItem("favs");
        };
    
        clearLocalStorage();
        
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                dispatch({ type: 'GET_DENTISTS', payload: data });
            } catch (error) {
            console.log("Error al obtener la información de los odontólogos: ", error);
            }
        };

        fetchData();
    }, []);
  
    const fetchDetailData = async (dentistId) => {
        try {
            const DetailResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${dentistId}`);
            const detailData = await DetailResponse.json();
        dispatch({ type: 'GET_DENTIST', payload: detailData });
        } catch (error) {
        console.log("Error al obtener más detalles del odontólogo: ", error);
      }
    };
  
    return [state, dispatch, fetchDetailData];
  };

  export { useReducerContext }