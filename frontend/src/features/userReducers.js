export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { loading: true }
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload}
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_LOGOUT':
            return {}

        default: 
            return state
    }
}

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return { loading: true }
        case 'USER_REGISTER_SUCCESS':
            return { loading: false, userInfo: action.payload}
        case 'USER_REGISTER_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_LOGOUT':
            return {}

        default: 
            return state
    }
}

export const detailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_DETAILS_REQUEST':
            return { loading: true }
        case 'USER_DETAILS_SUCCESS':
            return { loading: false, userInfo: action.payload}
        case 'USER_DETAILS_FAIL':
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_UPDATE_REQUEST':
            return { loading: true }
        case 'USER_UPDATE_SUCCESS':
            return { loading: false, userUpdated: action.payload}
        case 'USER_UPDATE_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_UPDATE_RESET':
            return {}

        default: 
            return state
    }
}

export const userProfilesReducer = (state = {profiles: []}, action) => {
    switch (action.type) {
        case 'USER_PROFILES_REQUEST':
            return { loading: true, profiles: [] }
        case 'USER_PROFILES_SUCCESS':
            return { loading: false, profiles: action.payload}
        case 'USER_PROFILES_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_PROFILES_RESET':
            return {}

        default: 
            return state
    }
}

export const premiumAccountsReducer = (state = {premiumAccounts: []}, action) => {
    switch (action.type) {
        case 'PREMIUM_LIST_REQUEST':
            return { premiumAccounts: [] }
        case 'PREMIUM_LIST_SUCCESS':
            return { premiumAccounts: action.payload}
        case 'PREMIUM_LIST_FAIL':
            return { error: action.payload }
        default: 
            return state
    }
}