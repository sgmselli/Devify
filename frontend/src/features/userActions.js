import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            },
        }

        const {data} = await axios.post(
            '/api/users/login/',
            {'username':email, 'password':password},
            config
        )

        dispatch({
            type:'USER_LOGIN_SUCCESS',
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: 'USER_LOGOUT'})
    dispatch({type: 'USER_DETAILS_RESET'})
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            },
        }

        const {data} = await axios.post(
            '/api/users/register/',
            {'name':name ,'email':email, 'password':password},
            config
        )

        dispatch({
            type:'USER_REGISTER_SUCCESS',
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}

//Get user details
export const details = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_DETAILS_REQUEST'
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

        const {data} = await axios.get(
            `/api/users/profile/`,
            config
        )

        dispatch({
            type:'USER_DETAILS_SUCCESS',
            payload: data && 'USER_DETAILS_SUCCESS'
        })

        localStorage.setItem('userDetails', JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: 'USER_DETAILS_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


//Update user information
export const update = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_UPDATE_REQUEST'
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
            `/api/users/update/`,
            user,
            config
        )

        dispatch({
            type:'USER_UPDATE_SUCCESS',
            payload:data
        })

        dispatch({
            type:'USER_LOGIN_SUCCESS',
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: 'USER_UPDATE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


//Get users
export const listProfiles = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_PROFILES_REQUEST'
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

        const {data} = await axios.get(
            `/api/users/`,
            config
        )

        dispatch({
            type:'USER_PROFILES_SUCCESS',
            payload: data
        })


    } catch (error) {

        dispatch({
            type: 'USER_PROFILES_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const premiumClick = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post(
            `/api/click/`,
            user,
        )

        dispatch({
            payload: data
        })


    } catch (error) {

        dispatch({
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}