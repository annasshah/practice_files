function changeInitialValue(dispatch) {
    dispatch({
        type: "NEWSTATE",
        username:'username',
    })
}



function changeAuthState(dispatch,authStatus) {
    dispatch({
        type: "USERAUTH",
        authStatus
    })
}

export {changeInitialValue, changeAuthState}