import {
    USER_FETCH_LOADING,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR,
    FETCH_SINGLE_USER_LOADING,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_ERROR,
    FILTER_USERLIST,
} from '../types/EventTypes';
import { updateUser } from '../action/UserAction';

const initialState = {
    status: '',
    users: [],
    clonedUsers: [],
    selectedUser: null,
    error: '',
    loading: '',
    // updatedUserList: [],
   
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case USER_FETCH_SUCCESS:
            return {
                users: action.payload,
                clonedUsers: action.payload,
                loading: false,
                error: '',
            }
        case USER_FETCH_ERROR:
            return {
                users: [],
                error: action.payload,
                loading: true,
            }
        case FETCH_SINGLE_USER_SUCCESS: {
            //console.log('action.payload.data', action.payload.data)
            return {
                ...state,
                selectedUser: action.payload.data,
                error: '',
                loading: false,
            }
        }
        case FETCH_SINGLE_USER_ERROR: {
            return {
                selectedUser: [],
                error: action.payload,
                loading: true
            }
        }
        case FILTER_USERLIST: {
            const searchValue = action.payload;
            let clonedUser = state.clonedUsers;
            if (searchValue) {
                clonedUser = clonedUser.filter(user => {
                    return (
                        user &&
                            user.title &&
                            user.title.toLowerCase().search(searchValue.toLowerCase()) !==
                            -1 
                    )
                })
            } else {
                clonedUser = clonedUser
            }
            return {
                ...state,
                users: clonedUser
            }
        }
        default:
            return state;
    }
}
export default UserReducer