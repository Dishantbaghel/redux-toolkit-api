import {configureStore} from '@reduxjs/toolkit'
import  gitUser  from './slices/gitUsersSlice';

export const store = configureStore({
    reducer : {
        app : gitUser,
    },
});