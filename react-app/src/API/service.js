import axios from 'axios'
import * as logninActions from '../features/loginReducer'


class service  {
 
loginPost(UserEmail,PassWord){
  let url = 'http://localhost:3001/api/v1/user/login'
  return axios.post(url, {
    email: UserEmail,
    password: PassWord,
  })
}

profilePost(accessToken){
  let url = 'http://localhost:3001/api/v1/user/profile'
  let config = {
    headers: {
      'Content-type' : 'application/json',
      'Authorization' : `Bearer ${accessToken}`
    }
    }
    console.log("config",config)
  return axios.post(url,{
    headers: {
      'Content-type' : 'application/json',
      'Authorization' : `Bearer ${accessToken}`
    }
    })
 /*  .then(function (response) {
    console.log("---------- ------",response.status);
    if(response.status === 200){
      console.log("here")
      return response ? response.status:null 
    }
    else return
  })
  .catch(function (error) {
    console.log(error);
  }); */


}



}

const services = new service()
export default services