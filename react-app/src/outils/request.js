import { useDispatch } from "react-redux";
import services from "../API/service";
import * as logninActions from '../../features/loginReducer'
import * as editNameActions from'../../features/editNameReducer'
import { useEffect } from "react";

function useRequesUser (Token){
   
    const dispatch = useDispatch()
    return services.profilePost(Token)
    .then(function (response) {
      if(response.status === 200){
        console.log("getUser",response)
        const data = response.json()
        let firstName = data.firstName
        let lastName =data.lastName
        let userId = data.id
        dispatch(logninActions.setUserId(userId))
        dispatch(editNameActions.setFristName(firstName))
        dispatch(editNameActions.setLastName(lastName))
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
}


export default useRequesUser