import axios from "axios";
function Api_getUser(params){
   return axios.get("/api/getUser", "get", params)
}
export default  Api_getUser;