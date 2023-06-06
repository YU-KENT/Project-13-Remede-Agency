import { creatStore, combineReducers } from "react"

// action creatot
const subMit = () =>({ type : "subMit"})



//Reducer

const loginReducer =(state = false, action) =>{
    if(action.type === "subMit" ){
     return !state
    }
    return state
};

const reducer = combineReducers({
    login: loginReducer,
})
const store = creatStore(reducer)

console.log(store.getState())