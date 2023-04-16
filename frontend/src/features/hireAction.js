import axios from 'axios'

export const createHire = (args) => async (dispatch) => {
    try {
        dispatch({
            type: 'CREATE_HIRE_REQUEST'
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            },
        }
        const {data} = await axios.post(
            '/api/hire/create/',
            args,
            config
        )
        dispatch({
            type:'CREATE_HIRE_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'CREATE_HIRE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}