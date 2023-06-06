import axios from "./axios"
//http://localhost:3001/api/v1/user/signup
export default async function API (){
    var api='http://localhost:3001';
    alert("获取数据");
    axios.get(api).then((response)=> {
        console.log(response); //接口返回数据
        /* this.setState({
            //用到this,要用到this取向
            list:response.data.result
        }) */
    }).catch(function (error) {
        console.log(error);//捕获异常数据
    })
}