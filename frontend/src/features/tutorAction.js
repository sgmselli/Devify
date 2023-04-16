import axios from 'axios'

export const newTutor = (args) => async (dispatch) => {
    try {
        dispatch({
            type: 'NEW_TUTOR_REQUEST'
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            },
        }
        const {data} = await axios.post(
            '/api/tutor/new/create/',
            args,
            config
        )
        dispatch({
            type:'NEW_TUTOR_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'NEW_TUTOR_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listBookings = () => async(dispatch, getState) => {
    try {
        dispatch({ type: 'LIST_TUTOR_REQUEST'} )

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                
            },
        }

        const { data } = await axios.get(
            '/api/admin/tutor/bookings/',
            config            
            )

        dispatch({
            type: 'LIST_TUTOR_SUCCESS',
            payload: data,
            
        })

    } catch (error) {
        dispatch({
            type: 'LIST_TUTOR_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}