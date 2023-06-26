function Account(propos){
const{title,amount,nombre,btnClassName} = propos
return(
    <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank {title} (x{nombre})</h3>
          <p className="account-amount">${amount}</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className={btnClassName}>View transactions</button>
        </div>
      </section>
)

}
export default Account