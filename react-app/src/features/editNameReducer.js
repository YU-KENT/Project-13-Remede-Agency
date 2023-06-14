
import {  createSlice} from '@reduxjs/toolkit'

const{actions, reducer} = createSlice({
name:'editName',
initialState :{
      firstNameInstant:'',
      lastNameInstant:'',
      firstName:'',
      lastName:''
},
reducers :{

  getFristName :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      console.log("FirstName",action.payload.value)
      return {...state, firstName:action.payload.value}
    }
  },

  getLastName :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      console.log("FirstName",action.payload.value)
      return {...state, lastName:action.payload.value}
    }
  },
  editFirstName: {
    prepare:(value)=>({
      payload:{value}
    }),  
    reducer:(state,action)=>{
    console.log("editFirstName",action.payload.value)
    return {...state, firstNameInstant:action.payload.value}
  }
  } ,
  editLastName: {
    prepare:(value)=>({
      payload:{value}
    }),
    reducer:(state,action) =>{
    console.log('editLastName',action.payload.value)
   
    return {...state, lastNameInstant:action.payload.value}

  }
  },
  save :{
  reducer:(state) =>{
    const{lastNameInstant,firstNameInstant} = state
    let lastName = lastNameInstant
    let firstName = firstNameInstant
    return {...state, lastName, firstName}
  }
  },
  cancle: {
  reducer:(state)=>{
    
    return {...state,lastNameInstant:'',firstNameInstant:''}
  }

  }
}

})
export const {getFristName,getLastName,editFirstName,editLastName,save,cancle} = actions
export default reducer
