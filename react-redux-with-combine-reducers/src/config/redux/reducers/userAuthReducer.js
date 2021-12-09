const INITIAL_STATE = {
    type: "USERAUTH",
    authStatus: false


    // ============= ...action
    // type: "NEWSTATE",
    // username: 'username',

    // ============= ...state
    //  username: '123',
    // type: "NEWSTATE",
}


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case state.type:
            return (

                { ...state, ...action }
            )
        default:
            return state
    }
}


export default reducer



