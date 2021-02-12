import {
    USER_FETCH_LOADING,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR,
    FETCH_SINGLE_USER_LOADING,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_ERROR,
    FILTER_USERLIST,
} from '../types/EventTypes';
import axios from 'axios';

///************GET*************//
export const userLoading = () => {
    return {
        type: USER_FETCH_LOADING,
    }
}

export const userSuccess = users => {
    return {
        type: USER_FETCH_SUCCESS,
        payload: users
    }
}

export const userError = error => {
    return {
        type: USER_FETCH_ERROR,
        payload: error
    }
}

//GET API ACTION CREATOR
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userLoading)
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const users = response.data
                dispatch(userSuccess(users))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(userError(errorMsg))
            })
    }
}