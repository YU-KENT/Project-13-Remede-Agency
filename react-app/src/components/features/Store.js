
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

const loginReducer =(state = false, action) =>{
    if(action.type === "subMit" ){
     return !state
    }
    return state
};

export const store = configureStore({
    reducer: {
      todos: '',
      filters: 'filtersReducer',
    }
})

store.subscribe(() =>{
    console.log("store updated!", store.getState());
  });
console.log(store.getState())