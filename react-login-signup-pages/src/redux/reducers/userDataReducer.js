import { SAFE_USER_DATA } from "../constants/user_data_constants"

const initialState = {
    isLoading:true,
    userData:{}
}

export const userDataReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
  case SAFE_USER_DATA:
    return { ...state, isLoading:false, userData:payload}
    break
  default:
    return state
  }
}
