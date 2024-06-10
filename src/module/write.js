// ##### SERVER용 코드 ##### //

// import axios from "axios";

// export const TAGS_ADD = 'write/TAGS_ADD';
// export const TAGS_REMOVE = 'write/TAGS_REMOVE';
// export const TAGS_RESET = 'write/TAGS_RESET';

// export const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
// export const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE';

// export const UPDATE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
// export const UPDATE_POST_FAILURE = 'write/WRITE_POST_FAILURE';

// export const DELETE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
// export const DELETE_POST_FAILURE = 'write/WRITE_POST_FAILURE';

// export const tags_add = (tag) => ({ type: TAGS_ADD, tag});
// export const tags_remove = (tag) => ({ type: TAGS_REMOVE, tag});
// export const tags_reset = () => ({ type: TAGS_RESET });

// export const write_post = (postData) => async dispatch => {
//     try{
//         await axios.post("http://localhost:3001/api/write", postData);
//         dispatch({ type: WRITE_POST_SUCCESS })
//     }catch(error){
//         console.log("데이터를 가져오는 중 오류가 발생했습니다!", error)
//         dispatch({ type: WRITE_POST_FAILURE, payload: error.message})
//     }
// }

// export const update_post = (postData) => async dispatch => {
//     try{
//         await axios.post("http://localhost:3001/api/updatePost", postData);
//         dispatch({ type: UPDATE_POST_SUCCESS })
//     }catch(error){
//         console.log("데이터를 가져오는 중 오류가 발생했습니다!", error)
//         dispatch({ type: UPDATE_POST_FAILURE, payload: error.message})
//     }
// }

// export const delete_post = (post_id) => async dispatch => {
//     try{
//         await axios.delete(`http://localhost:3001/api/deletePost/${post_id}`);
//         dispatch({ type: DELETE_POST_SUCCESS })
//     }catch(error){
//         console.log("데이터를 가져오는 중 오류가 발생했습니다!", error)
//         dispatch({ type: DELETE_POST_FAILURE, payload: error.message})
//     }
// }

// const initialState = {
//     error: null,
//     tags: []
// }

// export const write = (state=initialState, action) => {
//     switch(action.type){
//         case TAGS_ADD:
//             return{
//                 ...state,
//                 tags: [...state.tags, action.tag]
//             }
//         case TAGS_REMOVE:
//             return{
//                 ...state,
//                 tags: state.tags.filter(tag => tag!== action.tag)
//             }
//         case TAGS_RESET:
//             return{
//                 ...state,
//                 tags: []
//             }
//         case WRITE_POST_SUCCESS:
//             return{
//                 ...state,
//                 error: null,
//                 tags: []
//             }
//         case WRITE_POST_FAILURE:
//             return{
//                 ...state,
//                 error: action.payload,
//                 tags: []
//             }
//         case UPDATE_POST_SUCCESS:
//             return{
//                 ...state,
//                 error: null,
//                 tags: []
//             }
//         case UPDATE_POST_FAILURE:
//             return{
//                 ...state,
//                 error: action.payload,
//                 tags: []
//             }
//         case DELETE_POST_SUCCESS:
//             return{
//                 ...state,
//                 error: null,
//                 tags: []
//             }
//         case DELETE_POST_FAILURE:
//             return{
//                 ...state,
//                 error: action.payload,
//                 tags: []
//             }
//         default:
//             return state;
//     }
// }

// ##### SERVER용 코드 ##### //