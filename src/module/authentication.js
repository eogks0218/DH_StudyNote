// ##### SERVER용 코드 ##### //

// import axios from "axios";

// // 액션 타입 정의
// const MEMBER_LIST_SUCCESS = 'authentication/MEMBER_LIST_SUCCESS';
// const MEMBER_LIST_FAILURE = 'authentication/MEMBER_LIST_FAILURE';
// const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
// const LOGOUT = 'authentication/LOGOUT';
// const UPDATE_USER_SUCCESS = 'authentication/UPDATE_USER_SUCCESS';
// const UPDATE_USER_FAILURE = 'authentication/UPDATE_USER_FAILURE';

// // 액션 생성자 정의
// export const member_list = () => async dispatch => {
//     try{
//         const response = await axios.get("http://localhost:3001/api/memberList");
//         dispatch({ type: MEMBER_LIST_SUCCESS, payload: response.data})
//     }catch(error){
//         console.error("데이터를 가져오는 중 오류가 발생했습니다!", error)
//         dispatch({ type: MEMBER_LIST_FAILURE, payload: error.message})
//     }
// }

// export const update_user = (userData) => async dispatch => {
//     try{
//         await axios.post("http://localhost:3001/api/updateUser", userData);
//         dispatch({ type: UPDATE_USER_SUCCESS, payload: userData})
//     }catch(error){
//         console.error("데이터를 가져오는 중 오류가 발생했습니다!", error)
//         dispatch({ type: UPDATE_USER_FAILURE, payload: error.message})
//     }
// }

// export const login_success = (user) => ({ type: LOGIN_SUCCESS, user });
// export const logout = () => ({ type: LOGOUT });

// const initialState = {
//     memberList: [],
//     error: null,
//     loginUser: null
// }


// export const authentication = (state=initialState, action) => {
//     switch(action.type){
//         case MEMBER_LIST_SUCCESS:
//             return{
//                 ...state,
//                 memberList: action.payload,
//                 error: null
//             }
//         case MEMBER_LIST_FAILURE:
//             return{
//                 ...state,
//                 error: action.payload
//             }
//         case LOGIN_SUCCESS:
//             return{
//                 ...state,
//                 loginUser: action.user,
//                 error: null
//             }
//         case LOGOUT:
//             return{
//                 ...state,
//                 loginUser: null,
//                 error: null
//             }
//         case UPDATE_USER_SUCCESS:
//             console.log(action.payload)
//             return{
//                 ...state,
//                 loginUser: action.payload,
//                 error: null
//             }
//         case UPDATE_USER_FAILURE:
//             return{
//                 ...state,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }

// ##### SERVER용 코드 ##### //