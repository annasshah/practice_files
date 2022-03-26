import { SAFE_USER_DATA } from "../constants/user_data_constants"

export const storeUserData = (dispatch,data) =>{
    dispatch({
        type:SAFE_USER_DATA,
        payload:data
      })
}