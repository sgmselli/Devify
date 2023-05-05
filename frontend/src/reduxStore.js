import {configureStore} from '@reduxjs/toolkit';
import {freelanceReducer, freelanceCreateReducer, freelanceUpdateReducer} from './features/freelanceReducer';
import {createHireReducer} from './features/hireReducer';
import {newTutorClientReducer, tutorListReducer} from './features/tutorReducer';
import {userReducer, registerReducer, detailsReducer, userUpdateReducer, userProfilesReducer, premiumAccountsReducer} from './features/userReducers';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage }
}

const store = configureStore({
    reducer: {
        freelances: freelanceReducer,
        freelanceCreateAction: freelanceCreateReducer,
        freelanceCompleted: freelanceUpdateReducer,
        freelanceAssign:freelanceUpdateReducer,
        freelancesApply: freelanceUpdateReducer,
        premiumAccounts: premiumAccountsReducer,
        userLogin: userReducer,
        userRegister: registerReducer,
        userDetails: detailsReducer,
        userUpdate: userUpdateReducer,
        userProfiles: userProfilesReducer,
        hireCreate: createHireReducer,
        tutorNew: newTutorClientReducer,
        tutorBookings: tutorListReducer,
    },
    preloadedState: initialState
})

export default store;