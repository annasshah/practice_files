const INITIAL_STATE = {
    type: "NEWSTATE",
    username: '123',
    age:18,
    class:5,

    // ============= ...action
    // type: "NEWSTATE",
    // username: 'username',

    // ============= ...state
    //  username: '123',
    // type: "NEWSTATE",
}


const reducer = (state = INITIAL_STATE, action) => {
    // return {...state,...action }
    switch (action.type) {
        case state.type:
            return (
                {...state,...action }

                 )
        default:
            return state
    }
}


export default reducer



