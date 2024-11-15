import React, { useRef, useState } from 'react'
import Fname from '../components/user/Registration/Fname'
import Lname from '../components/user/Registration/Lname'
import Email from '../components/user/Registration/Email'
import Phone from '../components/user/Registration/Phone'
import Pwd from '../components/user/Registration/Pwd'
import { BtnTemp } from '../utils/JsxTemplate'
import '../components/user/Registration/style.css'
import '../styles/loader.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../api/post'
export default function Registration() {
    const validation = useRef(false);
    let navigate = useNavigate();
    let location = useLocation()
    let book = useRef({
        fname: false,
        lname: false,
        email: false,
        pwd: false,
        phn: false
    })

    let [fname, setFname] = useState('')
    let [lname, setLname] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [pwd, setPwd] = useState('')


    async function HandleSignup(e) {
        Validation()
        
        Object.values(book.current).filter(item => item !== true).length > 0 ? validation.current = false : validation.current = true;
        if(validation.current){
            setTitle(<span class="loader"></span>);
            // e.currentTarget.disabled = true;
            try {
                let result = await RegisterUser(fname.trim(),lname.trim(),email,phone,pwd) 

                if(result){

                    navigate('/login')
                    
                    // if(location.search){
                    //     navigate(`/${query}`)
                    // }else{
                    //     navigate('/login')
                    // }
                }

            } catch (err) {


                
                if(err.response.data === 'duplicate email'){
                    addErrMssg([{mssg:'Email already exist, please try something else'}], document.querySelector('.email').parentElement)
                }else if(err.response.data === 'duplicate phone'){
                    addErrMssg([{mssg:'Phone Number already exist, please try something else'}], document.querySelector('.phone').parentElement)
                }
                setTitle('Signup')
                e.currentTarget.disabled = false;
            }
           
        }else{
            console.log(validation.current)

            setTitle('Signup')
            e.currentTarget.disabled = false;
        }
    }

    function addErrMssg(err,pElem) {
            
        let check = pElem.querySelector('.err-mssg');
        if(check){
            pElem.querySelector('.err-mssg').remove()
            let div = document.createElement('div');
            div.className = 'err-mssg';
            // console.log(err)
            if(err.length > 0 ){
                div.innerHTML = err[0].mssg;
                pElem.append(div)
                

            }else{
                
                let check = pElem.querySelector('.err-mssg');

                if(check){
                    pElem.querySelector('.err-mssg').remove()
                }
            }
            
            
        }else{

            let div = document.createElement('div');
            div.className = 'err-mssg';
            // console.log(err)

            if(err.length !== 0 ){
                div.innerHTML = err[0].mssg;
                pElem.append(div)
                

            }else{
                
                let check = pElem.querySelector('.err-mssg');

                if(check){
                    pElem.querySelector('.err-mssg').remove()
                }
            }
        }
     
    }

    function Validation() {
        let inputs = [...document.querySelectorAll('input')]
        

        inputs.map(async(item) => {
            // console.log(item.parentElement)

            if(item.type === 'text'){

                if(item.name === 'fname'){

                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty'}
                    let length = item.value.length > 3 ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please name must be at least 3 letters.'}
                    let specialCharFree = /^[a-zA-Z]+$/.test(item.value.trim()) ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please enter only alphabets.'}
                    let errs = [empty,length,specialCharFree];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement);
                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.fname = false : book.current.fname = true
                    
                }else if(item.name === 'lname'){

                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty'}
                    let length = item.value.length > 3 ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please name must be at least 3 letters.'}
                    let specialCharFree = /^[a-zA-Z]+$/.test(item.value.trim()) ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please enter only alphabets.'}

                    let errs = [empty,length,specialCharFree];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)
                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.lname = false : book.current.lname = true

                }else if(item.name === 'email'){

                    // let emailvailidity = await checkEmailDuplicate();
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty.'}
                    let validEmail = emailRegex.test(item.value) ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please enter a valid email address.'}
                    // let emailDuplicate =  emailvailidity ? {bool: true, mssg: ''} : {bool: false, mssg: 'Email already exist, please try something else'} 
                    let errs = [empty,validEmail];
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)
                    let list = errs.filter(item => item.mssg !== '')
                    list.length > 0 ? book.current.email = false : book.current.email = true

                }
                
            }else if(item.type === 'password'){
                if(item.name === 'password'){
                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty.'}
                    let length = item.value.length >= 8 ? {bool: true, mssg: ''} :  {bool: false, mssg: 'Password must contain at least 8 characters.'}
                    let errs = [empty,length];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)

                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.pwd = false : book.current.pwd = true
                }
            }else if(item.type === 'number'){
                if(item.name === 'phone'){
                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty.'}
                    let length = item.value.length >= 11 ? {bool: true, mssg: ''} :  {bool: false, mssg: 'Invalid Phone Number'}
                    let errs = [empty,length];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)

                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.phn = false : book.current.phn = true
                }
            }
        })
    }

    let [title, setTitle] = useState('Signup')
  return (
    <>
        <div className='user-form'>
            <div className="form-title">
                Paypenz
            </div>

            <div className="form-cnt">
                

                <div className="form-intro">
                    Signup Form
                </div>

                <Fname />
                <Lname />
                <Email />
                <Phone />
                <Pwd />

                <br />
                <br />

                <BtnTemp Title={title} ClickListner={HandleSignup}  />
                <br />
                <small style={{color: 'blue'}}>Already Have An Account? <Link to={'/login'}>Log In Here</Link></small>
            </div>

        </div>
    </>
  )
}
