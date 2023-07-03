//login reducer manage login state that has : 
//ErrorMsg, UserEmail, id, PassWord, boolean ValideEmail,boolean VaidePassword, accessToken,

import { createSlice} from '@reduxjs/toolkit'

const{actions, reducer} = createSlice({
name:'login',
initialState :{
     
      Selected : false,
      ErrorMsg :'',
      UserEmail:'',
      id:'',
      PassWord:'',
      ValideEmail: false,
      VaidePassword: false,
      accessToken:undefined,
      
},
reducers :{
  UserEmail: {
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
          const regexEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
          const email= action.payload.value
          if(!regexEmail.test(email) ){
            return{...state,ErrorMsg :'',UserEmail:email}
          }
          else return {...state,ErrorMsg :'', UserEmail:email, ValideEmail :true} 
    }
  },

  PassWord: {
      prepare:(value)=>({
        payload:{value}
      }),
      reducer:(state,action) =>{
        const password = action.payload.value
        if(password.trim() === ""){
          return{...state,PassWord:password}
        }
        else return {...state,ErrorMsg :'', PassWord:password,VaidePassword:true}
          
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
    }},

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
      }},

  clear:()=>{
      return {
        Selected : false,
        ErrorMsg :'',
        UserEmail:'',
        id:'',
        PassWord:'',
        accessToken:undefined,
      }}

  }

})
export const {UserEmail,PassWord,selectCheckBox,setErrorMsg,setUserId,setAccessToken,clear} = actions
export default reducer



