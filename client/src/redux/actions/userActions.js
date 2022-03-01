import axios from "axios";
import {
    CLEAR_ERRORS,
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER
} from '../types/userTypes';

// Register
export const register = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let res = await axios.post("https://still-lake-26970.herokuapp.com/api/user/add", user);
        dispatch({ type: REGISTER_USER, payload: res.data });
    } catch (err) {
        dispatch({ type: FAIL_USER, payload: err })
    }
};

//Login

export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let res = await axios.post(
            "https://still-lake-26970.herokuapp.com/api/user/login", user
        );
        dispatch({ type: LOGIN_USER, payload: res.data })
    } catch (err) {
        dispatch({ type: FAIL_USER, payload: err })
    };
};

// current

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let res = await axios.get(
            "https://still-lake-26970.herokuapp.com/api/user/current",
            config
        );
        dispatch({ type: CURRENT_USER, payload: res.data });
    } catch (err) {
        dispatch({ type: FAIL_USER, payload: err })
    }
};

export const logout = () => {
    return { type: LOGOUT_USER };
};

export const clearErrors = () => {
    return { type: CLEAR_ERRORS };
};