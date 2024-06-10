// ##### SERVER용 코드 ##### //

// import axios from "axios";

// const POST_LIST_SUCCESS = 'post/POST_LIST_SUCCESS';
// const POST_LIST_FAILURE = 'post/POST_LIST_FAILURE';

// export const post_list = () => async dispatch => {
//     try{
//         const response = await axios.get("http://localhost:3001/api/postList");
//         dispatch({ type: POST_LIST_SUCCESS, payload: response.data })
//     }catch(error){
//         console.log("데이터를 가져오는 중 오류가 발생했습니다!", error)
//         dispatch({ type: POST_LIST_FAILURE, payload: error.message})
//     }
// }

// const initialState = {
//     postList: [],
//     error: null
// }

// export const post = (state=initialState, action) => {
//     switch(action.type){
//         case POST_LIST_SUCCESS:
//             return{
//                 ...state,
//                 postList: action.payload,
//                 error: null
//             }
//         case POST_LIST_FAILURE:
//             return{
//                 ...state,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }

// ##### SERVER용 코드 ##### //