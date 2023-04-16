export const createHireReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_HIRE_REQUEST':
            return { loading: true, freelances: []}
        case 'CREATE_HIRE_SUCCESS':
            return { loading: false, hire: action.payload}
        case 'CREATE_HIRE_FAIL':
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}