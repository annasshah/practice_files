import axios from 'axios'

let writeData = (dispatch) => {
  const apiHandle = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
  })

  apiHandle.get().then(e => {
    let data = e.data
    return dispatch({
      type: 'INITIALDATA',
      data: data,
      isLoading:false
    })
  })
}

// let newData = (dispatch,newVar) => {
//     return dispatch({
//         type:'NEWDATA',
//         name:newVar
//     })
// }

export { writeData }
