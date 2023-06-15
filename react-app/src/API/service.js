import axios from 'axios'

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
          Authorization : `Bearer ${accessToken}`
        }}

      return axios.post(url,{},config)

  }

  profileEditPut(firstName,lastName,accessToken){
      let url = 'http://localhost:3001/api/v1/user/profile'
      let config = {
        headers: {
          Authorization : `Bearer ${accessToken}`
        }}

      let body = {
          firstName: firstName,
          lastName : lastName,
      }
      
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