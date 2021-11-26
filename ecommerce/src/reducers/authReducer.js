const initialState = {
  token: null
}

const authReducer = (state = initialState, action)=> {
  const { type, payload } = action

  switch (type) {
      case "LOGIN_SUCCESS":
        return payload
        

      case "LOGIN_FAILED":
        return {
          ...payload
        }

      default:
          return state
  }

}

export default authReducer