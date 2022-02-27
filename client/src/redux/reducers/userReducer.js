import {
    LOAD_USER,
    REGISTER_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    CLEAR_ERRORS,
    FAIL_USER,
} from "../types/userTypes";

const initialState = {
    user: {},
    isLoad: false,
    isError: false,
    isAuth: false
};

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, isLoad: true };
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                user: payload.newUser,
                isAuth: true,
                isLoad: false
            };
        
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                user: payload.findUser,
                isAuth: true,
                isLoad: false
            };
        
        case CURRENT_USER:
            return {
                ...state,
                user: payload.user,
                isAuth: true,
                isLoad: false
            };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return {
                ...state,
                user: {},
                isAuth: false,
                isLoad: false
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                isError: false
            };
        case FAIL_USER:
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
};

export default UserReducer;