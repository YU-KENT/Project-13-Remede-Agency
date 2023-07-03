// editName reducer manage modification of name

import {  createSlice} from '@reduxjs/toolkit'
import {RequestUserNamePut} from '../outils/request'

const{actions, reducer} = createSlice({
name:'editName',
initialState :{
      firstNameInstant:'',
      lastNameInstant:'',
      firstName:'',
      lastName:''
},
reducers :{

  setFristName :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, firstName:action.payload.value}
    }
  },

  setLastName :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, lastName:action.payload.value}
    }
  },
  editFirstName: {
    prepare:(value)=>({
      payload:{value}
    }),  
    reducer:(state,action)=>{
    return {...state, firstNameInstant:action.payload.value}
  }
  } ,
  editLastName: {
    prepare:(value)=>({
      payload:{value}
    }),
    reducer:(state,action) =>{
    return {...state, lastNameInstant:action.payload.value}

  }},

  save :{
  reducer:(state) =>{
    const{lastNameInstant,firstNameInstant} = state
    let lastName = lastNameInstant
    let firstName = firstNameInstant
    return {...state, lastName, firstName}
  }},

  cancle: {
  reducer:(state)=>{
    
    return {...state,lastNameInstant:'',firstNameInstant:''}
  }},
  
  clear : ()=>{
  return {firstNameInstant:'',
            lastNameInstant:'',
            firstName:'',
            lastName:''}
  },
  requestPut :{
    prepare:(value)=>({
      payload:{value}
    }),
    reducer:(state,action) =>{
      RequestUserNamePut(state.firstName,state.lastName,action.payload.value)
    
  }},
}
})

export const {setFristName,setLastName,editFirstName,editLastName,save,cancle,clear,requestPut} = actions
export default reducer
