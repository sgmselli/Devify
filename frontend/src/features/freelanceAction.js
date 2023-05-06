import axios from 'axios';

export const listFreelances = () => async(dispatch, getState) => {
    try {
        dispatch({ type: 'FREELANCE_LIST_REQUEST'} )

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                
            },
        }

        const { data } = await axios.get(
            '/api/freelances/',
            config            
            )

        dispatch({
            type: 'FREELANCE_LIST_SUCCESS',
            payload: data,
            
        })

    } catch (error) {
        dispatch({
            type: 'FREELANCE_LIST_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const freelanceCreate = (args) => async(dispatch) => {
    try {
        dispatch({ type: 'FREELANCE_CREATE_REQUEST'} )

        const config = {
            headers:{
                'Content-type':'application/json'
            },
        }

        const { data } = await axios.post(
            '/api/admin/freelance/create/',
            args,
            config
            )

        dispatch({
            type: 'FREELANCE_CREATE_SUCCESS',
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: 'FREELANCE_CREATE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const freelanceCompleted = (id, args) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'FREELANCE_UPDATE_REQUEST'
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                
            },
        }

        const {data} = await axios.put(
            `/api/admin/freelance/completed/${id}`,
            args,
            config
        )

        dispatch({
            type:'FREELANCE_UPDATE_SUCCESS',
            payload:data
        })


    } catch (error) {

        dispatch({
            type: 'FREELANCE_UPDATE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const freelanceAssign = (id, args) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'FREELANCE_UPDATE_REQUEST'
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                
            },
        }

        const {data} = await axios.put(
            `/api/admin/freelance/assign/${id}`,
            args,
            config
        )

        dispatch({
            type:'FREELANCE_UPDATE_SUCCESS',
            payload:data
        })


    } catch (error) {

        dispatch({
            type: 'FREELANCE_UPDATE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const freelanceApply = (id, args) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'FREELANCE_UPDATE_REQUEST'
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                
            },
        }

        const {data} = await axios.put(
            `/api/freelances/apply/${id}`,
            args,
            config
        )

        dispatch({
            type:'FREELANCE_UPDATE_SUCCESS',
            payload:data
        })


    } catch (error) {

        dispatch({
            type: 'FREELANCE_UPDATE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}