import API from'../API/API'

function SignIn() {
    const data  = API()
    console.log("API",data)
    return (
      <main className="main bg-dark">
     
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label >Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label >Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
         {/*  <!-- PLACEHOLDER DUE TO STATIC SITE -->
          <a href="./user.html" className="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button className="sign-in-button">Sign In</button> -->
          <!--  --> */}
        </form>
      </section>
    </main>

    )
  
    }
    
export default SignIn