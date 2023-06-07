import API from'../API/API'
import { useReducer } from 'react'

function SignInReducer(state, action){
  if(action.type ==='valideUserName'){
    console.log("valideUserName",action.payload)
    if(action.payload === "tony@stark.com"){
       return {...state,UserNameCorrect : true}
    }
    else return state
  }
  if(action.type ==='validePassWord'){
    console.log('validePassWord',action.payload)
    if(action.payload === "password123"){
      return {...state,PassWordCorrect : true}
    }
    else return state
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
    if(UserNameCorrect || PassWordCorrect || Selected){

    }
    
    else dispatch({type :"setErrorMsg"})
    }

    return (
      <main className="main bg-dark">
     
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
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
          <p>{ErrorMsg}</p>
        </form>
      </section>
    </main>

    )
  
    }
    
export default SignIn