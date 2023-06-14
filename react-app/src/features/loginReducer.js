
import {  createSlice} from '@reduxjs/toolkit'
const mailRegex ='' ;
const passwordRegex ='' ;

const{actions, reducer} = createSlice({
name:'login',
initialState :{
     
      Selected : false,
      ErrorMsg :'',
      UserEmail:'',
      id:'',
      PassWord:'',
      loginStatus:false,
      accessToken:undefined,
      
},
reducers :{
  valideUserEmail: {
    prepare:(value)=>({
      payload:{value}
    }),  
    reducer:(state,action)=>{
    console.log("valideUserName",action.payload.value)
    
         return {...state, UserEmail:action.payload.value}
      
    /*   else return {...state,ErrorMsg :''} */
  }
  } ,
  validePassWord: {
    prepare:(value)=>({
      payload:{value}
    }),
    reducer:(state,action) =>{
    console.log('validePassWord',action.payload.value)
   
        return {...state, PassWord:action.payload.value}
      
      /* else return {...state,ErrorMsg :''} */
  }
  },
  selectCheckBox:(state)=>{
    return {...state, Selected:!state.Selected}
  },
  getUserId :{
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
  return{...state,loginStatus:true,accessToken:action.payload.value, }
}
},
  setErrorMsg:(state)=>{
    return {...state, ErrorMsg:'Please confirm your email and password'}
  }
}

})
export const {valideUserEmail,validePassWord,selectCheckBox,setErrorMsg,getUserId,setAccessToken} = actions
export default reducer


//Reducer

/* function SignInReducer(state, action){
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
  
  } */

