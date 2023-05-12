import { ADD_FAV, REMOVE_FAV } from "./actions";

const inicialState = {myFavorites: []}

const reducer = (state = inicialState, action) =>{

switch (action.type) {
    case ADD_FAV :
        return{
            ...state,
             myFavorites: [...state.myFavorites, action.paylod]
        }
        
    case REMOVE_FAV:
    return{
        ...state,
        myFavorites: 
        state.myFavorites.filter((favorito)=>  favorito.id !== parseInt(action.paylod))
    }

    default:
        return {...state};
}

}

export default reducer