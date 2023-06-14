import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser}from'@fortawesome/free-solid-svg-icons'
import {loginState} from '../../outils/selector'
import * as logninActions from '../../features/loginReducer'
import services from'../../API/service'

const login = (UserEmail,PassWord,loginStatus) =>{
  if(!loginStatus){
  return services.loginPost(UserEmail,PassWord)
  .then(function (response) {
    if(response.status === 200){
      return /* encodeURIComponent( */response.data.body.token
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  
}  else return
}

const getUser = (Token)=>{
  console.log("getUser--------------")
  return services.profilePost(Token)
  .then(function (response) {
    console.log("avant 200")
    if(response.status === 200){
      console.log("getUser",response)
      return response.data
    }
  })
  .catch(function (error) {
    console.log(error);
  });


}
function SignIn() {
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const state = useSelector(loginState)
 
    const{UserEmail,PassWord,Selected,ErrorMsg,loginStatus,accessToken} = state
    console.log("state",state)
  
    const handleSubmit = async (e)=>{
    e.preventDefault();
    if (Selected){
    const accessToken = await login(UserEmail,PassWord,loginStatus)
    console.log("uu____accessToken",accessToken)
    dispatch(logninActions.setAccessToken(accessToken))
    const data = await getUser(accessToken)
    console.log(data)
    }
    else dispatch(logninActions.setErrorMsg() )
    }

    return (
      <main className="main bg-dark">
      <section className="sign-in-content">
       <FontAwesomeIcon icon={faCircleUser} className='sign-in-icon'/>
        <h1>Sign In</h1>
        <form onSubmit = {handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor='username' >Username</label>
            <input type="text" id="username" onChange={(e)=> dispatch(
              logninActions.valideUserEmail(e.target.value)
            )} />
          </div>
          <div className="input-wrapper">
            <label htmlFor='password' >Password</label>
            <input type="password" id="password" onChange={(e)=> dispatch(
              logninActions.validePassWord(e.target.value)
            )} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onClick={()=> dispatch(
              logninActions.selectCheckBox()
            )} />
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