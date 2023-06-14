

export default function request (method,url,body){
console.log("request",method,url,body)
method = method.toUpperCase()
if(method ==='GET'){
    body = undefined;
}

return fetch(url,{
    method:method,
    body:JSON.stringify(body)
})
.then((res)=>{
    console.log("here",res)
   if(res.status === 401){console.log("401-------------")
   }else{
    const data = res.json()
    console.log(data)
    return data
   }
   
})
}
export const get = url => request('GET',url)
export const post = (url,body) => request('POST',url,body)