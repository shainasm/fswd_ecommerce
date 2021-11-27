import {toast}  from 'react-hot-toast'
import jwt from 'jsonwebtoken'


export const loginUser = (email, password)=>{
  // verify email n password
  // create and sign a jwt 
  const users = JSON.parse(localStorage.getItem('users'))
  const user = users.find(u=>u.email===email)

  if(email==='admin@mail.com' && user.password==="password"){
    const token = jwt.sign({email: user.email}, 'SECRET')
    toast.success("LOGIN SUCCESS")
    
     return { 
       type: "LOGIN_SUCCESS",
       payload: { token }
      }
  } else {
    toast.error("INCORRECT CREDS")
     return { 
       type: "LOGIN_FAILED",
       payload: { token: null } 
    }
  }
}