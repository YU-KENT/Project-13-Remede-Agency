import API from'../API/API'
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser}from'@fortawesome/free-solid-svg-icons'

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

function SignIn() {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(SignInReducer,{
      UserNameCorrect : false,
      PassWordCorrect : false,
      Selected : false,
      ErrorMsg :''
    })
    const{UserNameCorrect,PassWordCorrect,Selected,ErrorMsg} = state
    console.log("state",state)

    const handleSubmit = (e)=>{
    e.preventDefault();
    if(UserNameCorrect && PassWordCorrect && Selected){
     navigate('/user/Tony')
    }
    else dispatch({type :"setErrorMsg"})
    }

    return (
      <main className="main bg-dark">
      <section className="sign-in-content">
       <FontAwesomeIcon icon={faCircleUser} className='sign-in-icon'/>
        <h1>Sign In</h1>
        <form onSubmit = {handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor='username' >Username</label>
            <input type="text" id="username" onChange={(e)=> dispatch({
              type :"valideUserName",
              payload: e.target.value,
            })} />
          </div>
          <div className="input-wrapper">
            <label htmlFor='password' >Password</label>
            <input type="password" id="password" onChange={(e)=> dispatch({
              type :"validePassWord",
              payload: e.target.value,
            })} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onClick={()=> dispatch({
              type :"selectCheckBox"
            })} />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button" >Sign In</button>
          {
          <p className='Error_Messages'>{ErrorMsg}</p>}
        </form>
      </section>
    </main>

    )
  
    }
    
export default SignIn