import axios from "axios";
import { ADD_POST, DELETE_POST, FAIL_POST, GET_POST, LOAD_POST, UPDATE_POST } from "../types/postTypes";

// add post

export const addpost = (post) => async (dispatch) => {
    dispatch({ type: LOAD_POST });
    try {
        let res = await axios.post("https://still-lake-26970.herokuapp.com/api/user/addPost", post);
        dispatch({ type: ADD_POST, payload: res.data })
    } catch (err) {
        dispatch({ type: FAIL_POST, payload: err })
    }
};

// get post
export const getpost = () => async (dispatch) => {
    dispatch({ type: LOAD_POST });
    try {
        let res = await axios.get("https://still-lake-26970.herokuapp.com/api/user/getPost");
        dispatch({type: GET_POST, payload: res.data})
    } catch (err) {
        dispatch({ type: FAIL_POST, payload: err });
    }
}

// delete post*

export const deletePost = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`https://still-lake-26970.herokuapp.com/api/user/deletePost/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({ type: FAIL_POST, payload: err });
    }
}

// Update post

export const updatePost = (id, title, paragraph) => async (dispatch) => {
    try {
        let updatedPost = { title, paragraph }
        let res = await axios.put(`https://still-lake-26970.herokuapp.com/api/user/updatePost/${id}`, updatedPost)
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({ type: FAIL_POST, payload: err });
    }
}

