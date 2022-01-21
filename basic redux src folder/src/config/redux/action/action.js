let writeData = (dispatch,updateName) => {
    return dispatch({
        type:'INITIALDATA',
        name:updateName
    })
}


// let newData = (dispatch,newVar) => {
//     return dispatch({
//         type:'NEWDATA',
//         name:newVar
//     })
// }





export {writeData}