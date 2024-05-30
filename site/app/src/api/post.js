import axios from 'axios'
// import {IP} from '@env'


let uri_1 = 'ce-server.vercel.app'
let uri_2 = 'http://192.168.223.146:2003'
let IP = uri_2


const source = axios.CancelToken.source();

export async function RegisterUser(fname,lname,email,phone,pwd) {
    let response = await post_request_generators('signup', {fname,lname,email,phone,pwd})
    setTimeout(() => source.cancel('timeout'), 10000) 
    return (response)?.data
}

export async function LogUserIn(phone,pwd) {
    let response = await post_request_generators('login', {phone,pwd})
    setTimeout(() => source.cancel('timeout'), 10000) 
    return (response)?.data
}






async function post_request_generators(uri, body) {
    return(
        await axios.post(`${IP}/system.${uri}`, body, {
            cancelToken: source.token
        })
        .then((result) => result)
        .catch((error) => {
            if (axios.isCancel(error)) {
                console.log('Request canceled:', error.message);
            }  else {
                console.log('Error:', error.message);
            }    
            
        })     
        
    )
}



