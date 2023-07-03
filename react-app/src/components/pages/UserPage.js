import { Link, useParams } from 'react-router-dom'
import {userNameState} from '../../outils/selector'
import { useSelector  } from 'react-redux'
import Account from '../containers/Account'


function UserPage(){
    const {userId} = useParams()
    const profilePatch = '/profile/'+ userId
    const state = useSelector(userNameState)
    const{firstName,lastName} = state
    
    return(
    <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <Link to = {profilePatch}>
            <button className="edit-button" >Edit Name</button>
            </Link>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title='Checking' amount='2,082.79' nombre = {8349} btnClassName='transaction-button' />
        <Account title='Savings' amount='10,928.42' nombre = {6712} btnClassName='transaction-button'/>
        <Account title='Credit Card' amount='184.30' nombre = {8349} btnClassName='transaction-button'/>
    </main>
    )
}

export default UserPage