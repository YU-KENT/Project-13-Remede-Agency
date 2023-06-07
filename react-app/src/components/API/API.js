import { useEffect } from "react";
import axios from "./axios"
//http://localhost:3001/api/v1/user/signup
export default function API (){
    
    useEffect (()=>{
        async function fetchData() {
            try {
                var api='http://localhost:3001';
                alert("获取数据");
                axios.get(api).then((response)=> {
                    console.log("response",response)
            })
            } catch (err) {
                console.log(err)

            }
        }
        fetchData()


    },[])
    
}