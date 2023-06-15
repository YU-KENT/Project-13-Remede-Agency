import Logo from'../../asserts/img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUser,faRightFromBracket}from'@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector  } from 'react-redux'
import { userNameState} from '../../outils/selector'
import * as logninActions from '../../features/loginReducer'
import * as editNameActions from'../../features/editNameReducer'


function Header(){
  const NameState = useSelector(userNameState)
  const {firstName} = NameState
  const dispatch = useDispatch()

  return (
  !firstName ?
  <nav className="main-nav">
        <Link to ='/' className="main-nav-logo" >
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
      </Link>
        <div>
          <Link to ='/signin' className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        </div>
      </nav>
      :
      <nav className="main-nav">
      <Link to ='/' className="main-nav-logo" >
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <a className="main-nav-item" href="./user.html">
          <FontAwesomeIcon icon={faCircleUser}/>
            {firstName}
          </a>
          <Link to='/'className="main-nav-item" onClick={()=>{dispatch(editNameActions.clear()); dispatch(logninActions.clear())}}>
          <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        </div>
      </nav>
    )
}

export default Header