import createStore from 'redux'

const inicialState = {
    name: "Raul",
    count: 1
}

const reducer = (state = inicialState, action) => {
if(action.type === "AUMENTAR_NUMERO"){
    return {
        ...state,
        count: state.count + 1 
    }
}
 if (action.type === "CAMBIAR_NOMBRE") {
   return {
       ...state,
      nombre: action.paylod,
   }
 }
};


const store = createStore(reducer)


const action = {type: "AUMENTAR_NUMERO"}

const action1 ={type: "CAMBIAR_NOMBRE", paylod:"Azael"}

store.dispatch(action)










