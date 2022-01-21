const INITIAL_STATE = {
    type:'INITIALDATA',
    name:'user'
}


const reducer = (state = INITIAL_STATE,action) => {
     if(action.type  ===  'INITIALDATA'){
        //  NEWDATA   ===  INITIALDATA
         return {...state,...action}
     }
     else{
         return state
     }
}




export default reducer