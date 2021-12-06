const INITIAL_STATE = {

}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "QUESTIONS") {
        // state.data = action.data;
        return {...action};
    }
    return state;
};



export default reducer