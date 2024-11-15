import axios from 'axios'

let u1 = `http://localhost:5050`
let u4 = 'http://192.168.231.146:5050'
let u2 = `https://ce-server.onrender.com`
let plug = u4; 

export function bankVerification(acctNum,bank) {
    return new Promise((resolve, reject) => { 
        axios.post(`${plug}/bank-verification`, {acctNum,bank})
        .then((result) => {
            resolve(result)
        })
        .catch((err) => {
            reject(err) 
        })
    }) 
}

export let signup = (fname,lname,email,phone,pwd,state,campus) => {
    return new Promise((resolve, reject) => 
        axios.post(`http://${ip}:1010/seller/signup`, {fname,lname,email,phone,pwd,state,campus})
        .then((result) => resolve(result.data))
        .catch(err => reject(err))
    )
}

export let login = (email,pwd) => {
    return new Promise((resolve, reject) => 
        axios.post(`http://${ip}:1010/seller/login`, {email,pwd})
        .then(async(result) => {
            resolve(result.data)
            let id = result.data.id;
            console.log(id)
            SecureStore.setItemAsync('seller_id', id)
           
        })
        .catch(err => reject(err))
    )
}