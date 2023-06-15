import axios from 'axios'

import * as logninActions from '../features/loginReducer'


class service  {
 
loginPost(UserEmail,PassWord){
  let url = 'http://localhost:3001/api/v1/user/login'
  return axios.post(url, {
    email: UserEmail,
    password: PassWord,
  })
  /* let body = 
    JSON.stringify({
        email: UserEmail,
        password: PassWord,
    } )

  return fetch(url, {
        method:'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body,
  }) */
}

profilePost(accessToken){
  let url = 'http://localhost:3001/api/v1/user/profile'
 /*  return axios.post(url,{
    headers:{
      Authorization : `Bearer ${accessToken}`,
  }
}) */
  let config = {
    method:'POST',
    headers: {
      Authorization : `Bearer ${accessToken}`
    }
    }

  return fetch(url,config)


}
profileEditPut(firstName,lastName,accessToken){
  let url = 'http://localhost:3001/api/v1/user/profile'
  let config = {
    headers: {
      Authorization : `Bearer ${accessToken}`
    }
    }
  let body = {
      firstName: firstName,
      lastName : lastName,

  }
  console.log("config",body,config)
  axios.put(url,body,config,)
  .then(function (response) {
    console.log("put---------",response.status)
  })
  .catch(function (error) {
    console.log(error);
  })


}


}
const services = new service()
export default services