
import services from "../API/service";


export function RequestLogin(UserEmail,PassWord,login){
    if(!login){
    return services.login(UserEmail,PassWord)
    .then(function (response) {
      if(response.status === 200){
        return response.data.body.token
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }  else return
  }

export function RequestGetProfile (Token){
    return services.getProfile(Token)
    .then(function (response) {
        if(response.status === 200){
            console.log("getUser",response)
            return response.data.body
          }
        })
    .catch(function (error) {
          console.log(error);
        });
      
}

export function RequestUserNamePut(firstName, lastName,accessToken){
     return services.editProfile(firstName, lastName,accessToken)
     .then(function (response) {
        console.log("put---------",response.status)
      })
      .catch(function (error) {
        console.log(error);
      }) 
    

}

