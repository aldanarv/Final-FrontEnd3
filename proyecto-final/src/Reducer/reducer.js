export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'GET_CHARACTER': 
            return {...state, character: {}} //incompleto
        case 'ADD_FAV':
            return { ...state, favs: [...state.favs, action.payload] };
        case 'DELETE_FAV':
            return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id) };
        case 'CHANGE_THEME':
            return {...state, theme: ''}
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
        case 'SET_DENTIST':
            return {
            ...state,
            dentist: action.payload,
            };
        default:
            return state
    }
}