import Logo from'../../asserts/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

function Header(userName){
return (
true ?
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
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    :
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          {userName}
        </a>
        <a className="main-nav-item" href="./index.html">
          <i classNameName="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
)
    
}
export default Header