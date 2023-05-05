export const freelanceReducer = (state = { freelances : [] }, action) => {
    switch (action.type) {
        case 'FREELANCE_LIST_REQUEST':
            return { loading: true, freelances: []}
        case 'FREELANCE_LIST_SUCCESS':
            return { loading: false, freelances: action.payload}
        case 'FREELANCE_LIST_FAIL':
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const freelanceCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FREELANCE_CREATE_REQUEST':
            return { loading: true, freelanceCreatePayload: []}
        case 'FREELANCE_CREATE_SUCCESS':
            return { loading: false, freelanceCreatePayload: action.payload}
        case 'FREELANCE_CREATE_FAIL':
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const freelanceUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FREELANCE_UPDATE_REQUEST':
            return { loadingApply: true, freelanceUpdate: []}
        case 'FREELANCE_UPDATE_SUCCESS':
            return { loadingApply: false, freelanceUpdate: action.payload}
        case 'FREELANCE_UPDATE_FAIL':
            return { loadingApply: false, errorApply: action.payload }
        default: 
            return state
    }
}