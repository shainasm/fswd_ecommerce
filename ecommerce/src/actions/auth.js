import jwt from 'jsonwebtoken'


export const loginUser = (email, password)=>{
  // verify email n password
  // create and sign a jwt 
  if(email==='admin@mail.com' && password==="password"){  const token = jwt.sign({email}, 'SECRET')
     return { 
       type: "LOGIN_SUCCESS",
       payload: { token }
      }
  } else {
     return { 
       type: "LOGIN_FAILED",
       payload: { token: null } 
    }
  }
}