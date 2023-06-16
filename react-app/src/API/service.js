import axios from 'axios'

class service  {
 
  login(UserEmail,PassWord){
      let url = 'http://localhost:3001/api/v1/user/login'
      return axios.post(url, {
        email: UserEmail,
        password: PassWord,
      })
  }

  getProfile(accessToken){
      let url = 'http://localhost:3001/api/v1/user/profile'
      let config = {
        headers: {
          Authorization : `Bearer ${accessToken}`
        }}

      return axios.post(url,{},config)
  }

  editProfile(firstName,lastName,accessToken){
      let url = 'http://localhost:3001/api/v1/user/profile'
      let config = {
        headers: {
          Authorization : `Bearer ${accessToken}`
        }}

      let body = {
          firstName: firstName,
          lastName : lastName,
      }
      console.log(body)
      return axios.put(url,body,config)
     
  }
}

const services = new service()
export default services