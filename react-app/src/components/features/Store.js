
import { configureStore, createSlice} from '@reduxjs/toolkit'
//
/* const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      todoAdded(state, action) {
        state.push({
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        })
      },
      todoToggled(state, action) {
        const todo = state.find(todo => todo.id === action.payload)
        todo.completed = !todo.completed
      }
    }
  })
  
  export const { todoAdded, todoToggled } = todosSlice.actions
  export default todosSlice.reducer */
// action creatot
const subMit = () =>({ type : "subMit"})



//Reducer

function SignInReducer(state, action){
    if(action.type ==='valideUserName'){
      console.log("valideUserName",action.payload)
      if(action.payload === "tony@stark.com"){
         return {...state,UserNameCorrect : true}
      }
      else return {...state,ErrorMsg :''}
    }
    if(action.type ==='validePassWord'){
      console.log('validePassWord',action.payload)
      if(action.payload === "password123"){
        return {...state,PassWordCorrect : true}
      }
      else return {...state,ErrorMsg :''}
    }
    if(action.type ==='selectCheckBox'){
      console.log(state.Selected)
      return {...state, Selected:!state.Selected}
    }
    if(action.type ==='setErrorMsg'){
      return {...state, ErrorMsg:'Please confirm your email and password'}
    }
  
  }

export const store = configureStore({
    reducer: {
      signIn: 'SignInReducer',
      filters: 'filtersReducer',
    }
})

store.subscribe(() =>{
    console.log("store updated!", store.getState());
  });
console.log(store.getState())