const INITIAL_STATE = {
    type:'INITIALDATA',
    isLoading:true,
}


const reducer = (state = INITIAL_STATE,action) => {
     if(action.type  ===  state.type){
        //  NEWDATA   ===  INITIALDATA
         return {...state,...action}
     }
     else{
         return state
     }
}




export default reducer