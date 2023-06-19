
import {  createSlice} from '@reduxjs/toolkit'

const{actions, reducer} = createSlice({
name:'login',
initialState :{
     
      Selected : false,
      ErrorMsg :'',
      UserEmail:'',
      id:'',
      PassWord:'',
      accessToken:undefined,
      
},
reducers :{
  UserEmail: {
    prepare:(value)=>({
      payload:{value}
    }),  
    reducer:(state,action)=>{
         
          return {...state,ErrorMsg :'', UserEmail:action.payload.value}
         
        
  }
  } ,
  PassWord: {
    prepare:(value)=>({
      payload:{value}
    }),
    reducer:(state,action) =>{
      
        console.log("validePassWord",action.payload.value)
        return {...state,ErrorMsg :'', PassWord:action.payload.value}
  }
  },

  selectCheckBox:(state)=>{
    return {...state, ErrorMsg :'', Selected:!state.Selected}
  },
  setUserId :{
    prepare:(value)=>({
      payload:{value}
    }),  
    reducer:(state,action)=>{
    return{...state,id:action.payload.value, }
  }
 },
 setAccessToken :{
  prepare:(value)=>({
    payload:{value}
  }),  
  reducer:(state,action)=>{
  return{...state,accessToken:action.payload.value, }
 }},

  setErrorMsg:{
  prepare:(value)=>({
    payload:{value}
  }),
  reducer: (state,action)=>{
    return {...state, ErrorMsg:action.payload.value}
  }
  },
  clear:()=>{
    return {
      Selected : false,
      ErrorMsg :'',
      UserEmail:'',
      id:'',
      PassWord:'',
      accessToken:undefined,
    }
  }

  }

})
export const {UserEmail,PassWord,selectCheckBox,setErrorMsg,setUserId,setAccessToken,clear} = actions
export default reducer



