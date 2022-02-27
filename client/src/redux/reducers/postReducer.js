import { ADD_POST, DELETE_POST, FAIL_POST, GET_POST, LOAD_POST, UPDATE_POST } from "../types/postTypes";

const initialState = {
    post: [],
    isLoad: false,
    isError: false,
    isPosted: false,
    isDeleted: false,
    isUpdated: false,
    isGet: false
}

const PostReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_POST:
            return {
                ...state, isLoad: true
            }
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, payload],
                isPosted: true,
                isLoad: false
            }
        case GET_POST:
            return {
                ...state,
                isLoad: false,
                post: payload,
                isGet: true,
            }
        case DELETE_POST:
            return {
                ...state, isDeleted: true, isLoad: false, post: state.post.filter(item => item._id !== payload._id)
            }
        case UPDATE_POST:
            return {
                ...state, isLoad: false, isUpdated: true, posts: state.post.map(item => item._id === payload._id ? payload : item)
            };
        case FAIL_POST:
            return {
                ...state, isError: true
            }
        default:
            return state;
    };
};

export default PostReducer;