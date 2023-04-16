export const newTutorClientReducer = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_TUTOR_REQUEST':
            return { loading: true, freelances: []}
        case 'NEW_TUTOR_SUCCESS':
            return { loading: false, tutoring: action.payload}
        case 'NEW_TUTOR_FAIL':
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const tutorListReducer = (state = {bookings:[]}, action) => {
    switch (action.type) {
        case 'LIST_TUTOR_REQUEST':
            return { loading: true, bookings: []}
        case 'LIST_TUTOR_SUCCESS':
            return { loading: false, bookings: action.payload}
        case 'LIST_TUTOR_FAIL':
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}