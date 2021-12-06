import axios from "axios";

function getData(dispatch) {
    const apiHandle = axios.create({
        baseURL: "https://opentdb.com/api.php?amount=10&category=9",
    });

    apiHandle.get()
        .then((e) => {
            let data = e.data
            dispatch({
                type: "DATAFROMAPI",
                data: data,
            })
        })

}


let userDataFromDatabase = (dispatch, data) => {
    dispatch({
        type: "QUESTIONS",
        data:[]
    })
}

export { userDataFromDatabase, getData };