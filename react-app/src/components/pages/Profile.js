import {loginState, userNameState} from '../../outils/selector'
import { useDispatch, useSelector  } from 'react-redux'
import * as editNameActions from '../../features/editNameReducer'
import {useRef } from 'react'


function Profile (){
    const dispatch = useDispatch() 
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const NameState = useSelector(userNameState)
    const state = useSelector(loginState)
    const {accessToken} = state
    const {firstName, lastName} = NameState
    console.log("userNamestate",NameState)

    const onClear = ()=>{
    firstNameRef.current.value =""
    lastNameRef.current.value =""
                        }
    
    return(
        <main className="main bg-gris">
            <div className="header">
                <h1 className='profile-title'>Welcome back</h1>
                <div className='form-editName'>
                    <div className="input-wrapper input-edit">
                        <input type="text" ref={firstNameRef} id="firstName" placeholder= {firstName} onChange={(e)=> dispatch(
                        editNameActions.editFirstName(e.target.value)
                        )} />
                  </div>
                    <div className="input-wrapper input-edit">
                            <input type="text" ref={lastNameRef} id="lastName" placeholder= {lastName} onChange={(e)=> dispatch(
                            editNameActions.editLastName(e.target.value)
                             )} />
                    </div>
               </div>
                <button className="edit-button edit-profile-button" onClick={()=>{
                   dispatch(editNameActions.save());
                   dispatch(editNameActions.requestPut(accessToken));
                   onClear()

                }}>Save</button>
                <button className="edit-button edit-profile-button" onClick={()=>{dispatch(editNameActions.cancle());onClear()}}>Cancle</button>
            </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button button-profile">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button button-profile">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button button-profile">View transactions</button>
            </div>
          </section>
        </main>
        )



}

export default Profile