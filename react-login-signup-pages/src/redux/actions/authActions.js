import { ACTIVE_USER_AUTH, INACTIVE_USER_AUTH } from "../constants/auth_constants"

export const activeUser = (dispatch) =>{
    dispatch({
        type:ACTIVE_USER_AUTH
      })
}

export const InActiveUser = (dispatch) =>{
    dispatch({
        type:INACTIVE_USER_AUTH
      })
}