import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser}from'@fortawesome/free-solid-svg-icons'
import {loginState} from '../../outils/selector'
import * as logninActions from '../../features/loginReducer'
import * as editNameActions from'../../features/editNameReducer'
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
  return services.profilePost(Token)
  .then(function (response) {
    if(response.status === 200){
      console.log("getUser",response)
      return response.data.body
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
    const{UserEmail,PassWord,Selected,ErrorMsg,loginStatus} = state

    const handleSubmit = async (e)=>{
    e.preventDefault();
    if (Selected){
    const accessToken = await login(UserEmail,PassWord,loginStatus)
    console.log("uu____accessToken",accessToken)
    dispatch(logninActions.setAccessToken(accessToken))
       if(accessToken){
          const data = await getUser(accessToken)
          console.log("dta",data)
          if(data){let firstName = data.firstName
          let lastName =data.lastName
          let userId = data.id
          dispatch(logninActions.setUserId(userId))
          dispatch(editNameActions.setFristName(firstName))
          dispatch(editNameActions.setLastName(lastName))
          navigate(`/user/${userId}`)}
       }
       else {dispatch(logninActions.setErrorMsg('Username or Password incorrect'))}
    }
    else dispatch(logninActions.setErrorMsg("please select ' Remerber me '") )
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