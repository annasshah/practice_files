import { ACTIVE_USER_AUTH, INACTIVE_USER_AUTH } from "../constants/auth_constants"

const initialState = {
    isLoading:true,
    auth:false
}

export const authReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
  case ACTIVE_USER_AUTH:
    return { ...state, isLoading:false, auth:true}
    break

  case INACTIVE_USER_AUTH:
    return { ...state, isLoading:false, auth:false}
    break
    
  default:
    return state
  }
}
